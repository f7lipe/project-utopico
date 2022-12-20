import { VStack } from "../../components/Stack View/VStack"
import { LargeHeading } from "../../components/Typografies"
import { useState, useEffect } from "react"
import { Container, TopicToolbar, NewTopicButton } from "./styles"
import { RxText } from "react-icons/rx"
import CollectionView from "../../components/Collection View"
import Navbar from "../../components/Navbar"
import NewTopic from "../../components/New Topic"
import Topic from "../../components/Topic"
import useTopic from "../../hooks/useTopic"

const Topics = () => {

    const { topics, getTopics, isLoading, status } = useTopic()
    const [addingTopic, setAddingTopic] = useState(false)

    useEffect(() => {
        getTopics()
    }, [getTopics, status])

    return (
        <Container>
            <Navbar />
            {addingTopic  && <NewTopic setOpen={setAddingTopic} />}
            <VStack
                width="70%"
                widthMobile="100%"
                margin="60px 20px"
                padding="20px"
                justify="flex-start"
                align="flex-start">
                <TopicToolbar>
                    <NewTopicButton onClick={() => setAddingTopic(!addingTopic)}>
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
