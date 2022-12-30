import { Container } from "../layouts/Topics/styles"
import Navbar from "../components/Navbar"
import InfoBanner from "../components/Informative Banner"
import useNetwork from "../hooks/useNetwork"
import Topics from "../layouts/Topics"
import search_signal from "../assets/search_signal.svg"


const TopicsPage = () => {
    const { state } = useNetwork()
    const offline = !state.online
    const title = "You are offline"
    const subtitle = "Check your internet connection and try again"

    return (
        <Container>
            <Navbar />
            {offline ?
                <InfoBanner
                    image={search_signal}
                    title={title}
                    subtitle={subtitle} />
                :
                <Topics />
            }
        </Container>
    )
}

export default TopicsPage

