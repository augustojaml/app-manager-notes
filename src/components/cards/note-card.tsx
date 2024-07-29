import { INote } from '@global/local-storage'
import useNoteStore from '@global/store/use-note-store'
import { bodyParser } from '@global/utils/body-parse'
import { resizeTextArea } from '@global/utils/resize-text-area'
import { setNewOffset } from '@global/utils/set-new-offset'
import { Trash } from 'lucide-react'
import {
  FC,
  HtmlHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  note: INote
}

interface IPosition {
  x: number
  y: number
}

export const NoteCard: FC<Props> = ({ note, ...rest }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<IPosition>(note.position)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState<IPosition>({ x: 0, y: 0 })
  const [zIndex, setZIndex] = useState(1)
  const { updateNotePosition, deleteNote } = useNoteStore()

  const body = bodyParser(note.body)

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setIsDragging(true)
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
      setZIndex(10)
    },
    [position.x, position.y],
  )

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        const newPosition = setNewOffset({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        })
        updateNotePosition({ ...note, position: newPosition })
        setPosition(newPosition)
      }
    },
    [isDragging, dragStart.x, dragStart.y, updateNotePosition, note],
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    setZIndex(1)
  }, [])

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    } else {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleMouseMove, handleMouseUp, isDragging])

  useEffect(() => {
    resizeTextArea(textAreaRef)
  }, [])

  return (
    <div
      ref={cardRef}
      className="absolute mt-2 w-96 cursor-pointer rounded shadow-app-shadow"
      style={{
        backgroundColor: note.colors.colorBody,
        left: position.x,
        top: position.y,
        zIndex,
      }}
      onMouseDown={handleMouseDown}
      {...rest}
    >
      <div
        className="flex items-center justify-between rounded-t p-3"
        style={{ backgroundColor: note.colors.colorHeader }}
      >
        <button onClick={() => deleteNote(note)}>
          <Trash className="h-4 w-4" />
        </button>
      </div>
      <div className="rounded-b p-4">
        <textarea
          ref={textAreaRef}
          style={{ color: note.colors.colorText }}
          className="w-full resize-none border-none bg-inherit focus:h-full focus:w-full focus:bg-inherit focus:outline-none"
          defaultValue={body}
          onInput={() => resizeTextArea(textAreaRef)}
        />
      </div>
    </div>
  )
}
