import useNoteStore from '@global/store/use-note-store'
import { useUserStore } from '@global/store/use-user-store'
import { NoteCard } from '@pages/app/components/cards/note-card'
import { useEffect } from 'react'

export const NotesList = () => {
  const { notes, loadNotes, changeSelectedNote } = useNoteStore(
    (store) => store,
  )

  const { username } = useUserStore((store) => store)

  useEffect(() => {
    loadNotes(username)
  }, [loadNotes, username])

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

export default NotesList
