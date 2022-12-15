import { HStack } from "../Stack View/HStack"
import { VStack } from "../Stack View/VStack"
import { Body } from "./styles"
import {  SmallHeading, LargeSerif } from "../Typografies"
import { useNavigate } from "react-router-dom"

const Topic = ({ title, logo, id }: Topic) => {
    const navigate = useNavigate()
    const redirectToTopic = () => {
        navigate(`/topics/${id}`)
    }
    return (
        <Body onClick={redirectToTopic}>
            <VStack align="center" justify="center">
                <HStack height="60%">
                    {
                        logo ?
                            <img src={logo} alt="topic logo" />
                            :
                            <LargeSerif>{title[0]}</LargeSerif>
                    }
                </HStack>
                <HStack height="40%" align="center" justify="center" padding="10px">
                    <SmallHeading>{title}</SmallHeading>
                </HStack>
            </VStack>
        </Body>
    )
}

export default Topic
