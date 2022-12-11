import Tiptap from "../../components/Editor"
import { HStack } from "../../components/Stack View/HStack"
import { VStack } from "../../components/Stack View/VStack"
import { LargeHeading } from "../../components/Typografies"
import useEditor from "../../hooks/useEditor"
import Reader from "../../components/Reader"

const View = () => {
    const { editing } = useEditor()
    return (
        <VStack align="center" width="100%">
            <HStack widthMobile="100%" width="50%" justify="flex-start">
                <LargeHeading>Topic View</LargeHeading>
            </HStack>
            {!editing ? <Tiptap /> : <Reader />}
        </VStack>
    )
}

export default View