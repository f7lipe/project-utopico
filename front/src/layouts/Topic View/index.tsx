import { useEffect } from "react"
import { HStack } from "../../components/Stack View/HStack"
import { VStack } from "../../components/Stack View/VStack"
import { LargeHeading } from "../../components/Typografies"
import Editor from "../../features/editor"
import Reader from "../../features/reader"
import Toolbar from "../../components/Toolbar"
import useTopic from "../../hooks/useTopic"
import ShimmerTopicView from "./Shimmer/ShimmerTopicView"

const TopicView = () => {
    const { topic, getTopic, isEditing, cleanUp, id, isLoading, editTopic } = useTopic()
    const { content } = topic

    useEffect(() => {
        getTopic()

        return () => cleanUp()

    }, [getTopic, cleanUp])

    return (
        <VStack
            align="center"
            width="100%"
            margin="0 0 80px 0">
            {
                isLoading ? <ShimmerTopicView /> : (
                    <>
                        <HStack
                            widthMobile="95%"
                            width="70%"
                            justify="flex-start">
                            <VStack
                                align="flex-start">
                                <LargeHeading>{topic.title}</LargeHeading>
                                <Toolbar />
                            </VStack>
                        </HStack>
                        {isEditing && id ? <Editor content={String(content)} updateFunction={editTopic} /> : <Reader content={String(content)} />}
                    </>
                )
            }
        </VStack>
    )
}

export default TopicView