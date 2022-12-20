import useTopic from "../../hooks/useTopic"
import Barloader from "react-spinners/BarLoader"
import { HStack } from "../Stack View/HStack"
import { EditButton } from "../../layouts/Topic View/styles"
import { IoInformationCircleOutline, IoTrashOutline, IoArchiveOutline } from "react-icons/io5"

const Toolbar = () => {
    const { status, isEditing, setIsEditing } = useTopic()

    return (
        <HStack
            width="150px"
            justify={isEditing ? "flex-start" : "space-between"}
            align="center"
            margin="-50px 0 0 0">
            <EditButton
                editing={isEditing || status === 'saving'}
                onClick={() => { setIsEditing(!isEditing) }} 
                disabled={status === 'saving'}
            >
                {isEditing ? 'Done' : 'Edit'}
            </EditButton>
            <Barloader
                    color="#6e6e6e"
                    height={4}
                    width={40}
                    loading={status === 'saving'} />
        
            <IoInformationCircleOutline size={"20px"} />
            {!isEditing && <IoArchiveOutline size={"20px"} />}
            {!isEditing && <IoTrashOutline size={"20px"} />}
        </HStack>
    )
}

export default Toolbar