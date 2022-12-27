import { VStack } from "../../components/Stack View/VStack"
import { LargeHeading } from "../../components/Typografies"
import { useEffect } from "react"
import { Container, TopicToolbar } from "./styles"
import CollectionView from "../../components/Collection View"
import Navbar from "../../components/Navbar"
import NewTopic from "../../components/New Topic"
import Topic from "../../components/Topic"
import useTopic from "../../hooks/useTopic"
import ShimmerHome from "../Shimmers/ShimmerHome"

const Topics = () => {

    const { topics, getTopics, isLoading, status } = useTopic()

    const reload = status === 'created'

    useEffect(() => {
        getTopics()
    }, [getTopics, reload])

    return (
        <Container>
            <Navbar />
            <VStack
                width="70%"
                widthMobile="100%"
                margin="60px 20px"
                padding="20px"
                justify="flex-start"
                align="flex-start">
                {
                    isLoading ? <ShimmerHome /> :
                        <>
                            <TopicToolbar>
                                <NewTopic />
                            </TopicToolbar>
                            <LargeHeading>Brand New</LargeHeading>
                            <CollectionView items={topics} renderItem={Topic} />
                        </>
                }
                {topics.length === 0 && !isLoading && <LargeHeading>Write your frist topic</LargeHeading>}

            </VStack>
        </Container>
    )
}

export default Topics
