import Tiptap from "../../components/Editor"
import { HStack } from "../../components/Stack View/HStack"
import { VStack } from "../../components/Stack View/VStack"
import { LargeHeading, Subtitle } from "../../components/Typografies"
import Reader from "../../components/Reader"
import { useEffect, useState, useLayoutEffect } from "react"
import Navbar from "../../components/Navbar"
import useTopic from "../../hooks/useTopic"
import { useParams } from "react-router-dom"
import generateTOC from "../../helpers/generateTOC"
import Toolbar from "../../components/Toolbar"
import TOC from "../../components/TOC"

const TopicView = () => {
    const { id } = useParams<{id: string}>()
    const { topic, getTopic, isEditing, cleanUp } = useTopic()
    const { content } = topic 
    const [toc, setToc] = useState<String[] | []>([])
    
    useEffect(() => {
        if (id) getTopic(id)
        return () => {
            cleanUp()
        }
    }, [])

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
            {isEditing && id ? <Tiptap  topicId={id}/> : <Reader />}
        </VStack>
    )
}

export default TopicView