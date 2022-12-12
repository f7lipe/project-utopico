import { useEditor as tipTapEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Highlight from '@tiptap/extension-highlight'
import useEditor from '../../hooks/useEditor'
import MenuBar from './menu'

const Tiptap = () => {
  const { setContent, content } = useEditor()

  const editor = tipTapEditor({
    extensions: [
      StarterKit,
      Highlight,
      Placeholder.configure({
        // Use a placeholder:
        placeholder: 'Write something wonderful. And put it out there.',
        // Use different placeholders depending on the node type:
        // placeholder: ({ node }) => {
        //   if (node.type.name === 'heading') {
        //     return 'What’s the title?'
        //   }

        //   return 'Can you add some further context?'
        // },
      }),],
    content: content,
    onUpdate: ({ editor }) => {
      setTimeout(() => {
        const updatedContent = editor.getHTML()
        // use api to update content then update state
        setContent(updatedContent)
      }, 3000)
    }

  }, [])

  return (
    <div className='editor' >
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </ div>
  )
}

export default Tiptap