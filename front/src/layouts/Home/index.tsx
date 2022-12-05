import { HStack } from "../../components/Stack View/HStack"
import { LargeHeading } from "../../components/Typografies"
import Navbar from "../../components/Navbar"
import Container from "../../components/Collection View/styles"

const Home = () => {
    return (
        <Container>
            <Navbar />
            <HStack margin="60px 20px" justify="flex-start" align="flex-start">
                <LargeHeading>Home</LargeHeading>
            </HStack>
            
        </Container>
    )
}

export default Home
