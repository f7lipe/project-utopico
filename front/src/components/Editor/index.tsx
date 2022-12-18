import { useEditor as tipTapEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Highlight from '@tiptap/extension-highlight'
import MenuBar from './menu'
import useTopic from '../../hooks/useTopic'
import { useState } from 'react'

interface Props {
  topicId: string
}

const Tiptap = ({ topicId }: Props) => {
  const { topic, editTopic } = useTopic()
  const { title, content } = topic

  let timeoutId: NodeJS.Timeout

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
      const updatedContent = editor.getHTML()
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        editTopic(topicId, title, updatedContent)
      }, 3000);
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