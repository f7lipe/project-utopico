import { createContext, useState } from "react"
import useTopic from "../hooks/useTopic"

interface IEditorContext {
    editing: boolean,
    setEditing: (editing: boolean) => void,
    content: any,
    setContent: (content: any) => void,
}

interface IEditorProvider {
    children: React.ReactNode
}

const EditorContext = createContext<IEditorContext>({
    editing: false,
    setEditing: () => {},
    content: null,
    setContent: () => {},
})

const EditorProvider = ({ children } : IEditorProvider) => {
    const { topic } = useTopic()
    const [editing, setEditing] = useState(topic.content ? false : true)
    const [content, setContent] = useState(topic.content)

    return (
        <EditorContext.Provider value={{ editing, setEditing, content, setContent }}>
            {children}
        </EditorContext.Provider>
    )
}

export { EditorContext, EditorProvider }