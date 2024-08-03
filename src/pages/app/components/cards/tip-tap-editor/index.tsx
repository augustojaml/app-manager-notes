import './styles/editor-styles.css'

import { debounce } from '@global/utils/debounce'
import Heading from '@tiptap/extension-heading'
import Link from '@tiptap/extension-link'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useEffect } from 'react'

import { MenuBar } from './menu-bar'

interface TipTapEditorProps {
  content: string
  onUpdate: (content: string) => void
}

const TipTapEditor: React.FC<TipTapEditorProps> = ({ content, onUpdate }) => {
  const debouncedOnUpdate = debounce((content: string) => {
    onUpdate(content)
  }, 1000)

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
      }),
      Link.configure({
        HTMLAttributes: {
          class: 'custom-link',
        },
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      debouncedOnUpdate(editor.getHTML())
    },
  })

  useEffect(() => {
    if (!editor) return
    const { from, to } = editor.state.selection
    editor.commands.setContent(content, false, {
      preserveWhitespace: 'full',
    })
    editor.commands.setTextSelection({ from, to })
  }, [editor, content])

  return (
    <div id="custom-editor" className="p-4 pb-8">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}

export default TipTapEditor
