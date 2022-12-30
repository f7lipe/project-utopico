import { useEditor } from '@tiptap/react'
import starterkit from "./starterkit"
import codeblock from "./codeblock"
import placeholder from "./placeholder"
import highlight from "./highlight"
import updateHandler from "../services/updateHandler"

export default (content: string | undefined, handlerFunction: (content: string) => void) => {

    const extensions = [ starterkit, highlight, codeblock, placeholder ]

    return useEditor({
        extensions, 
        content,
        onUpdate: ({ editor }) => {
            const updatedContent = editor.getHTML()
            updateHandler({updatedContent, handlerFunction})
        }
    }, [])
}


