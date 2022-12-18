import useTopic from "../../hooks/useTopic"
import { HStack } from "../Stack View/HStack"

const Reader = () => {
    const { topic } = useTopic()
    const { content } = topic

    return (
        <HStack width="70%" 
        justify="flex-start"
        widthMobile="100%"
        padding="10px">
            <div dangerouslySetInnerHTML={{ __html: String(content) }} />
        </HStack>
    )
}

export default Reader