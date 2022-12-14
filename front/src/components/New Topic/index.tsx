import { Background, Body, Button, NewTopicForm, Input } from "./styles"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { HStack } from "../Stack View/HStack"
import { SmallHeading } from "../Typografies"

interface INewTopicProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NewTopic = (props: INewTopicProps) => {
    const { setOpen } = props
    return (
        <Background>
            <Body>
                <HStack
                    justify="flex-end"
                    height="20px">
                    <AiOutlineCloseCircle size={25} onClick={()=> setOpen(false)}/>
                </HStack>
                <HStack height="30px" justify="flex-start">
                    <SmallHeading>New Topic</SmallHeading>
                </HStack>
                <NewTopicForm>
                    <Input type="text" placeholder="Title" />
                </NewTopicForm>
                <Button> Create Topic </Button>
            </Body>
        </Background>
    )
}

export default NewTopic