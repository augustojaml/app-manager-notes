import useNoteStore from '@global/store/use-note-store'
import { buttonsActions, IButtonsAction } from '@global/utils/button-actions'
import { Plus } from 'lucide-react'

import { BoxButton } from './box-button'

interface Props {
  onAddNote: () => void
  onChangeColorNote: (color: IButtonsAction) => void
}

export const BoxNote = ({ onAddNote, onChangeColorNote }: Props) => {
  const { selectedNote } = useNoteStore((store) => store)

  return (
    <div className="absolute left-0 top-0 flex h-screen w-28 items-center justify-center gap-2 px-4">
      <div className="flex flex-col gap-3 rounded-full bg-app-600 p-3 shadow-app-shadow">
        <BoxButton
          onClick={onAddNote}
          icon={<Plus style={{ color: selectedNote.colors.colorBody }} />}
          colors={{
            primary: selectedNote.colors.colorBody,
            secondary: 'var(--app-500)',
          }}
        />

        {buttonsActions.map((button) => (
          <BoxButton
            key={button.id}
            colors={button.colors}
            onClick={() => onChangeColorNote(button)}
          />
        ))}
      </div>
    </div>
  )
}
