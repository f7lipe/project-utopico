import Tiptap from "../../components/Editor"
import { HStack } from "../../components/Stack View/HStack"
import { VStack } from "../../components/Stack View/VStack"
import { LargeHeading, Subtitle } from "../../components/Typografies"
import Reader from "../../components/Reader"
import { EditButton, TableOfContents, Item } from "./styles"
import { useEffect, useState, useLayoutEffect } from "react"
import Navbar from "../../components/Navbar"
import useTopic from "../../hooks/useTopic"
import { useParams } from "react-router-dom"
import { ProgressBar } from 'react-loader-spinner'
import generateTOC from "../../helpers/generateTOC"

import { IoInformationCircleOutline, IoTrashOutline, IoArchiveOutline } from "react-icons/io5"

const TopicView = () => {
    const { id } = useParams<{id: string}>()
    const { topic, getTopic, isEditing, setIsEditing, status, cleanUp } = useTopic()
    const { content } = topic 
    const [toc, setToc] = useState<String[] | []>([])
    const handleEdit = () => {
        setIsEditing(!isEditing)
    }
    
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
                    <HStack
                        width="150px"
                        justify={isEditing ? "flex-start" : "space-between"}
                        align="center"
                        margin="-50px 0 0 0">
                        <EditButton
                            editing={isEditing}
                            onClick={handleEdit}>
                            {isEditing ? 
                                (status === 'saving' ? <ProgressBar height="40"  width="80" ariaLabel="progress-bar-loading" borderColor = '#F4442E' barColor = '#51E5FF'/> : 'Done')
                                : 'Edit'}
                        </EditButton>
                        <IoInformationCircleOutline
                            size={"20px"} />
                        {
                            !isEditing && (
                                <>
                                    <IoArchiveOutline
                                        size={"20px"} />
                                    <IoTrashOutline
                                        size={"20px"} />
                                </>
                            )
                        }
                    </HStack>
                </VStack>
            </HStack>
            <HStack
                widthMobile="95%"
                width="70%"
                justify="flex-start"
                margin="0 0 30px 0">
                {
                    (!isEditing && toc?.length > 0) && (
                        <TableOfContents>
                            <Subtitle>TABLE OF CONTENTS</Subtitle>
                            {
                                toc.map((item, index) => (<Item key={index}>{item}</Item>))
                            }
                        </TableOfContents>
                    )
                }
            </HStack>
            {isEditing && id ? <Tiptap  topicId={id}/> : <Reader />}
        </VStack>
    )
}

export default TopicView