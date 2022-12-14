import { HStack } from "../Stack View/HStack"
import { VStack } from "../Stack View/VStack"
import { Body } from "./styles"
import {  SmallHeading, LargeSerif } from "../Typografies"
import { useNavigate } from "react-router-dom"

interface ITopicProps {
    title: string
    logo?: string
    id: string
}

const Topic = ({ title, logo, id }: ITopicProps) => {
    const navigate = useNavigate()
    const redirectToTopic = () => {
        navigate(`/topics/${id}`)
    }
    return (
        <Body onClick={redirectToTopic}>
            <VStack height="50px" align="center" justify="center">
                <HStack>
                    {
                        logo ?
                            <img src={logo} alt="topic logo" />
                            :
                            <LargeSerif>{title[0]}</LargeSerif>
                    }
                </HStack>
                <HStack>
                    <SmallHeading>{title}</SmallHeading>
                </HStack>
            </VStack>
        </Body>
    )
}

export default Topic
