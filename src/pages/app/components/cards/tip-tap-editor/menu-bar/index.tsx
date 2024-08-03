import { Editor } from '@tiptap/react'
import { Bold, Heading1, Heading2, ItalicIcon } from 'lucide-react'
import { ReactNode } from 'react'

interface CustomButtonProps {
  children: ReactNode
  onClick: () => void
  disabled?: boolean
  isActive?: boolean
}

const CustomButton = ({
  children,
  onClick,
  disabled = false,
  isActive = false,
}: CustomButtonProps) => {
  return (
    <button
      className="flex h-6 w-6 items-center justify-center rounded border border-transparent transition hover:border-zinc-400 hover:brightness-90"
      disabled={disabled}
      onClick={onClick}
      style={{
        borderColor: isActive ? 'var(--app-green-500)' : 'transparent',
      }}
    >
      {children}
    </button>
  )
}

export const MenuBar: React.FC<{ editor: Editor | null }> = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <div className="menu-bar mb-2 flex items-center gap-2 border-b border-b-zinc-400 pb-2">
      <CustomButton
        onClick={() => {
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }}
        disabled={
          !editor.can().chain().focus().toggleHeading({ level: 2 }).run()
        }
        isActive={editor.isActive('heading', { level: 2 })}
      >
        <Heading1 className="h-4 w-4" />
      </CustomButton>
      <CustomButton
        onClick={() => {
          editor.chain().focus().toggleHeading({ level: 3 }).run()
        }}
        disabled={
          !editor.can().chain().focus().toggleHeading({ level: 3 }).run()
        }
        isActive={editor.isActive('heading', { level: 3 })}
      >
        <Heading2 className="h-4 w-4" />
      </CustomButton>
      <CustomButton
        onClick={() => {
          editor.chain().focus().toggleBold().run()
        }}
        isActive={editor.isActive('bold')}
        disabled={!editor.can().chain().focus().toggleBold().run()}
      >
        <Bold className="h-3 w-3" />
      </CustomButton>
      <CustomButton
        onClick={() => {
          editor.chain().focus().toggleItalic().run()
        }}
        isActive={editor.isActive('italic')}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
      >
        <ItalicIcon className="h-3 w-3" />
      </CustomButton>
    </div>
  )
}
