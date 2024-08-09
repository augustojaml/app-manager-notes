import { INote } from '@global/local-storage/note'
import useNoteStore from '@global/store/use-note-store'
import { formatDateTimeBR } from '@global/utils/format-datetime-br'
import { setNewOffset } from '@global/utils/set-new-offset'
import { RefreshCcw, Trash } from 'lucide-react'
import {
  FC,
  HtmlHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import TipTapEditor from './tip-tap-editor'

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  note: INote
}

interface IPosition {
  x: number
  y: number
}

export const NoteCard: FC<Props> = ({ note, ...rest }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const editorRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<IPosition>(note.position)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState<IPosition>({ x: 0, y: 0 })
  const [zIndex, setZIndex] = useState(1)
  const { updateNotePosition, deleteNote, updateNoteBody } = useNoteStore()

  const [textBody, setTextBody] = useState(note.body)
  const [isTyping, setIsTyping] = useState(false)
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(
    null,
  )
  const [typingStartTimer, setTypingStartTimer] =
    useState<NodeJS.Timeout | null>(null)

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (editorRef.current && editorRef.current.contains(e.target as Node)) {
        return
      }
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

  const handleEditorUpdate = useCallback(
    (newBody: string) => {
      setTextBody(newBody)
      if (!isTyping && !typingStartTimer) {
        setTypingStartTimer(
          setTimeout(() => {
            setIsTyping(true)
          }, 0),
        )
      }
      if (debounceTimer) {
        clearTimeout(debounceTimer)
      }
      setDebounceTimer(
        setTimeout(() => {
          updateNoteBody({ ...note, body: newBody })
          setIsTyping(false)
          setTypingStartTimer(null)
        }, 1000),
      )
    },
    [isTyping, typingStartTimer, debounceTimer, updateNoteBody, note],
  )

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
        className="flex h-8 items-center justify-between rounded-t p-3"
        style={{ backgroundColor: note.colors.colorHeader }}
      >
        <button onClick={() => deleteNote(note)}>
          <Trash className="h-4 w-4" />
        </button>
        {isTyping ? (
          <div className="flex items-center gap-2">
            <RefreshCcw className="h-4 w-4 animate-spin" />
            <span className="text-[10px] italic">Salvando</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-[10px] italic">
              {`Atualizando em ${formatDateTimeBR(new Date(note.updatedAt).toLocaleString())}`}
            </span>
          </div>
        )}
      </div>
      <div
        className="rounded-b border-none font-custom text-sm"
        ref={editorRef}
      >
        <TipTapEditor content={textBody} onUpdate={handleEditorUpdate} />
      </div>
    </div>
  )
}
