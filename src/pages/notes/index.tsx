import useNoteStore from '@global/store/use-note-store'
import { NoteCard } from '@pages/notes/components/cards/note-card'
import { useEffect } from 'react'

export const Notes = () => {
  const { notes, loadNotes, changeSelectedNote } = useNoteStore(
    (store) => store,
  )

  useEffect(() => {
    loadNotes()
  }, [loadNotes])

  return (
    <div>
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onClick={() => changeSelectedNote(note)}
        />
      ))}
    </div>
  )
}

export default Notes
