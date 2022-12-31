import tiptap from '../lib/tiptap'
import MenuBar from '../components/Menu'
import { EditorContent } from '@tiptap/react'

const Editor = (
  { content, updateFunction } : 
  {
    content: string, 
    updateFunction: (content: string) => void 
  }) => {
  const tiptapEditor = tiptap(content, updateFunction) 
  
  return (
    <div className='editor' >
      <MenuBar editor={tiptapEditor} />
      <EditorContent editor={tiptapEditor}/>
    </ div>
  )
}

export default Editor