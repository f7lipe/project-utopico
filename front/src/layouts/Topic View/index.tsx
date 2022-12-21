import { useEffect, useState, useLayoutEffect } from "react"
import { HStack } from "../../components/Stack View/HStack"
import { VStack } from "../../components/Stack View/VStack"
import { LargeHeading } from "../../components/Typografies"
import Navbar from "../../components/Navbar"
import Tiptap from "../../components/Editor"
import Reader from "../../components/Reader"
import Toolbar from "../../components/Toolbar"
import TOC from "../../components/TOC"
import useTopic from "../../hooks/useTopic"
import generateTOC from "../../helpers/generateTOC"
import ShimmerTopicView from "../Shimmers/ShimmerTopicView"

const TopicView = () => {
    const { topic, getTopic, isEditing, cleanUp, id, isLoading } = useTopic()
    const { content } = topic
    const [toc, setToc] = useState<String[] | []>([])

    useEffect(() => {
        getTopic()

        return () => {
            cleanUp()
        }
    }, [getTopic, cleanUp])

    useLayoutEffect(() => {
        if (!content) return
        const newToc = generateTOC(content)
        setToc(newToc)
    }, [content])

    return (
        <VStack
            align="center"
            width="100%">
            <Navbar />
            {
                isLoading ? <ShimmerTopicView /> : (
                    <>
                        <HStack
                            widthMobile="95%"
                            width="70%"
                            justify="flex-start"
                            margin="50px 0 30px 0">
                            <VStack
                                align="flex-start">
                                <LargeHeading>{topic.title}</LargeHeading>
                                <Toolbar />
                            </VStack>
                        </HStack>
                        <HStack
                            widthMobile="95%"
                            width="70%"
                            justify="flex-start"
                            margin="0 0 30px 0">
                            {
                                (!isEditing && toc?.length > 0) && <TOC toc={toc} />
                            }
                        </HStack>
                        {isEditing && id ? <Tiptap /> : <Reader />}
                    </>
                )
            }
        </VStack>
    )
}

export default TopicView