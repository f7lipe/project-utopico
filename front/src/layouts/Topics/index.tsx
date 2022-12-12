import { VStack } from "../../components/Stack View/VStack"
import { LargeHeading } from "../../components/Typografies"
import CollectionView from "../../components/Collection View"
import Navbar from "../../components/Navbar"
import Container from "../../components/Collection View/styles"
import Topic from "../../components/Topic"

const Topics = () => {

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
        }
    ]

    return (
        <Container>
            <Navbar />
            <VStack margin="60px 20px" justify="flex-start" align="flex-start">
                <LargeHeading>Home</LargeHeading>
                <CollectionView items={fakeTopics} renderItem={Topic} />

            </VStack>
            
        </Container>
    )
}

export default Topics
