import { BoxNote } from '@components/boxes/box-note'
import useNoteStore from '@global/store/use-note-store'
import { IButtonsAction, randomButton } from '@global/utils/button-actions'
import { Notes } from '@pages/notes'

export const App = () => {
  const { addNote, updateNoteColor, selectedNote } = useNoteStore(
    (store) => store,
  )
  const handleAddNote = () => {
    const selectActionsButton = randomButton()

    const newNote = {
      id: new Date().getTime().toString(),
      position: {
        x: Math.floor(Math.random() * 501),
        y: Math.floor(Math.random() * 501),
      },
      body: '',
      colors: {
        id: selectActionsButton.id,
        colorHeader: selectedNote.colors.colorHeader,
        colorBody: selectedNote.colors.colorBody,
        colorText: selectedNote.colors.colorText,
      },
    }
    addNote(newNote)
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
    <main className="relative h-screen overflow-auto bg-app-700 bg-app-linear bg-app-4em p-10">
      <BoxNote
        onAddNote={handleAddNote}
        onChangeColorNote={handleChangeColorNote}
      />
      <Notes />
    </main>
  )
}
