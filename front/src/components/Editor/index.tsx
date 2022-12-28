import { useEditor , EditorContent } from '@tiptap/react'
import { lowlight } from 'lowlight/lib/core'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Highlight from '@tiptap/extension-highlight'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import MenuBar from './menu'
import useTopic from '../../hooks/useTopic'


const Tiptap = () => {
  const { topic, editTopic } = useTopic()
  const { title, content } = topic

  let timeoutId: NodeJS.Timeout

  lowlight.registerLanguage('html', html)
  lowlight.registerLanguage('css', css)
  lowlight.registerLanguage('js', js)
  lowlight.registerLanguage('ts', ts)


  const editor = useEditor({
    extensions: [
      StarterKit.configure({ codeBlock: false }),
      Highlight,
      CodeBlockLowlight.configure({
        lowlight,
      }) as any,
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
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      const updatedContent = editor.getHTML()
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        editTopic(title, updatedContent)
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