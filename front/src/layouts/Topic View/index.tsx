import Tiptap from "../../components/Editor"
import { HStack } from "../../components/Stack View/HStack"
import { VStack } from "../../components/Stack View/VStack"
import { LargeHeading } from "../../components/Typografies"
import useEditor from "../../hooks/useEditor"
import Reader from "../../components/Reader"
import EditButton from "./styles"

import { IoInformationCircleOutline, IoTrashOutline, IoArchiveOutline } from "react-icons/io5"

const TopicView = () => {
    const { editing, setEditing } = useEditor()
    const handleEdit = () => {
        setEditing(!editing)
    }
    return (
        <VStack
            align="center"
            width="100%">
            <HStack
                widthMobile="100%"
                width="50%"
                justify="flex-start"
                margin="0 0 30px 0">
                <VStack
                    align="flex-start">
                    <LargeHeading>Topic View</LargeHeading>
                    <HStack
                        width="150px"
                        justify="space-between"
                        align="center"
                        margin="-50px 0 0 0">
                        <EditButton
                            editing={editing}
                            onClick={handleEdit}>
                            {editing ? 'Done' : 'Edit'}
                        </EditButton>
                        <IoInformationCircleOutline
                            size={20} />
                        <IoArchiveOutline
                            size={20} />
                        <IoTrashOutline
                            size={20} />
                    </HStack>
                </VStack>
            </HStack>
            {editing ? <Tiptap /> : <Reader />}
        </VStack>
    )
}

export default TopicView