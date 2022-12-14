import { VStack } from "../../components/Stack View/VStack"
import { LargeHeading } from "../../components/Typografies"
import CollectionView from "../../components/Collection View"
import Navbar from "../../components/Navbar"
import { Container, TopicToolbar, NewTopicButton } from "./styles"
import Topic from "../../components/Topic"
import { RxText } from "react-icons/rx"
import NewTopic from "../../components/New Topic"
import { useState } from "react"

const Topics = () => {

    const [open, setOpen] = useState(false)

    const fakeTopics: Topic[] = [
        {
            id: '1',
            title: 'Topic',
        },
        {
            id: '2',
            title: 'Something',
        },
        {
            id: '3',
            title: 'Else',
        },
        {
            id: '4',
            title: 'Else',
        },
        {
            id: '5',
            title: 'Else',
        },
        {
            id: '6',
            title: 'Else',
        },
                {
            id: '7',
            title: 'Else',
        },
        {
            id: '8',
            title: 'Else',
        }
    ]

    return (
        <Container>
            <Navbar />
            {open && <NewTopic setOpen={setOpen}/>}
            <VStack 
                    width="70%"
                    widthMobile="100%" 
                    margin="60px 20px" 
                    padding="20px" 
                    justify="flex-start" 
                    align="flex-start">
                <TopicToolbar>
                    <NewTopicButton onClick={()=> setOpen(!open)}>
                        <RxText size={30} color={"blue"}/>
                        New Topic
                    </NewTopicButton>
                </TopicToolbar>
                <LargeHeading>Home</LargeHeading>
                <CollectionView items={fakeTopics} renderItem={Topic} />

            </VStack>
        </Container>
    )
}

export default Topics
