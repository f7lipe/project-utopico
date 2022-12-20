import { useState } from "react"
import { Background, Body, Button, NewTopicForm, Input } from "./styles"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { HStack } from "../Stack View/HStack"
import { SmallHeading } from "../Typografies"
import useTopic from "../../hooks/useTopic"

interface INewTopicProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NewTopic = (props: INewTopicProps) => {
    const { setOpen } = props
    const { createTopic } = useTopic()
    const [title, setTitle] = useState('')
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await createTopic(title)
    }

    return (
        <Background>
            <Body>
                <HStack
                    justify="flex-end"
                    height="20px">
                    <AiOutlineCloseCircle
                        size={25}
                        onClick={() => setOpen(false)} />
                </HStack>
                <HStack
                    height="30px"
                    justify="flex-start">
                    <SmallHeading>New Topic</SmallHeading>
                </HStack>
                <NewTopicForm onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)} />
                    <Button
                        type="submit">
                        Create Topic
                    </Button>
                </NewTopicForm>
            </Body>
        </Background>
    )
}

export default NewTopic