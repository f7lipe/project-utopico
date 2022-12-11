import useEditor from "../../hooks/useEditor"
import { HStack } from "../Stack View/HStack"

const Reader = () => {
    const { content } = useEditor()

    return (
        <HStack width="50%" 
        justify="flex-start"
        widthMobile="100%"
        padding="10px">
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </HStack>
    )
}

export default Reader