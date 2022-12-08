import { useEditor as tipTapEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import useEditor from '../../hooks/useEditor'

const Tiptap = () => {
    const { setEditing, setContent, editing, content } = useEditor()

    const editor = tipTapEditor({
      extensions: [StarterKit,],
      content: content || '<p>Write something</p>',
    })

    const handleEdit = () => {
      setEditing(!editing)
      const newContent = editor?.getHTML()
      setContent(newContent)
   } 

    return (
      <EditorContent editor={editor} onBlur={handleEdit}/>
    )
  }
  
  export default Tiptap