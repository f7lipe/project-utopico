import { VStack } from "../../components/Stack View/VStack"
import { LargeHeading } from "../../components/Typografies"
import CollectionView from "../../components/Collection View"
import Navbar from "../../components/Navbar"
import { Container, TopicToolbar, NewTopicButton } from "./styles"
import Topic from "../../components/Topic"
import { RxText } from "react-icons/rx"
import NewTopic from "../../components/New Topic"
import { useState, useEffect } from "react"
import useTopic from "../../hooks/useTopic"


const Topics = () => {

    const [open, setOpen] = useState(false)
    const { topics, getTopics, isLoading } = useTopic()

    useEffect(() => {
        getTopics()
    }, [])

    return (
        <Container>
            <Navbar />
            {open && <NewTopic setOpen={setOpen} />}
            <VStack
                width="70%"
                widthMobile="100%"
                margin="60px 20px"
                padding="20px"
                justify="flex-start"
                align="flex-start">
                <TopicToolbar>
                    <NewTopicButton onClick={() => setOpen(!open)}>
                        <RxText size={30} color={"blue"} />
                        New Topic
                    </NewTopicButton>
                </TopicToolbar>
                {
                    isLoading ? <LargeHeading>Loading...</LargeHeading> :
                        <>
                            <LargeHeading>Home</LargeHeading>
                            <CollectionView items={topics} renderItem={Topic} />
                        </>
                }
                { topics.length === 0 && !isLoading && <LargeHeading>Write your frist topic</LargeHeading>}

            </VStack>
        </Container>
    )
}

export default Topics
