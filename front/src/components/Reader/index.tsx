import useEditor from "../../hooks/useEditor"

const Reader = () => {
    const { content, editing, setEditing } = useEditor()
    const handleEdit = () => {
        setEditing(!editing)
    }
    return (
        <div onClick={handleEdit}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    )
}

export default Reader