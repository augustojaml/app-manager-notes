import { Main } from '@global/components/main'
import { INote } from '@global/local-storage/note'
import useNoteStore from '@global/store/use-note-store'
import { useUserStore } from '@global/store/use-user-store'
import { IButtonsAction } from '@global/utils/button-actions'

import { BoxNote } from './components/boxes/box-note'
import { ExistButton } from './components/exit-button'
import NotesList from './components/note-list'

export const App = () => {
  const { addNote, updateNoteColor, selectedNote, changeSelectedNote } =
    useNoteStore((store) => store)
  const { username } = useUserStore((store) => store)

  const handleAddNote = () => {
    const newNote: INote = {
      id: new Date().getTime().toString(),
      username,
      position: {
        x: Math.floor(Math.random() * 501),
        y: Math.floor(Math.random() * 501),
      },
      body: '',
      colors: {
        id: selectedNote.colors.id,
        colorHeader: selectedNote.colors.colorHeader,
        colorBody: selectedNote.colors.colorBody,
        colorText: selectedNote.colors.colorText,
      },
      updatedAt: new Date(),
    }
    addNote(newNote)
    changeSelectedNote(newNote)
  }

  const handleChangeColorNote = (color: IButtonsAction) => {
    const newColors = {
      id: color.id,
      colorHeader: color.colors.primary,
      colorText: color.colors.text,
      colorBody: color.colors.secondary,
    }

    updateNoteColor(newColors)
  }

  return (
    <Main>
      <ExistButton />
      <BoxNote
        onAddNote={handleAddNote}
        onChangeColorNote={handleChangeColorNote}
      />
      <NotesList />
    </Main>
  )
}

export default App
