import { useEditor as tipTapEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import useEditor from '../../hooks/useEditor'
import { VStack } from '../Stack View/VStack'
import MenuBar from './menu'

const Tiptap = () => {
    const { setContent, content } = useEditor()

    const editor = tipTapEditor({
      extensions: [StarterKit, Highlight],
      content: content || '<p>Write something</p>',
      
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
        <EditorContent editor={editor}/>
      </ div>
    )
  }
  
  export default Tiptap