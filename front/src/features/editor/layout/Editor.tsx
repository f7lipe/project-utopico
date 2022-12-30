import tiptap from '../lib/tiptap'
import MenuBar from '../components/Menu'
import useTopic from '../../../hooks/useTopic'
import { EditorContent } from '@tiptap/react'

const Editor = () => {
  const { topic, editTopic } = useTopic()
  const { content } = topic
  const tiptapEditor = tiptap(content, editTopic) 
  
  return (
    <div className='editor' >
      <MenuBar editor={tiptapEditor} />
      <EditorContent editor={tiptapEditor}/>
    </ div>
  )
}

export default Editor