import { HStack } from "../Stack View/HStack"
import { VStack } from "../Stack View/VStack"
import { Body } from "./styles"
import {  SmallHeading, LargeSerif } from "../Typografies"

interface ITopicProps {
    title: string
    logo?: string
}

const Topic = ({ title, logo }: ITopicProps) => {
    return (
        <Body>
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
