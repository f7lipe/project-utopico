import Tiptap from "../../components/Editor"
import { HStack } from "../../components/Stack View/HStack"
import { VStack } from "../../components/Stack View/VStack"
import { LargeHeading, Subtitle } from "../../components/Typografies"
import useEditor from "../../hooks/useEditor"
import Reader from "../../components/Reader"
import {EditButton, TableOfContents, Item} from "./styles"
import { useEffect, useState } from "react"

import { IoInformationCircleOutline, IoTrashOutline, IoArchiveOutline } from "react-icons/io5"

const TopicView = () => {
    const { editing, setEditing, content } = useEditor()
    const [toc, setToc] = useState<String[] | []>([])
    const handleEdit = () => {
        setEditing(!editing)
    }
    
    useEffect(() => {
        const parser = new DOMParser()
        const doc = parser.parseFromString(content, "text/html")
        const headings = doc.querySelectorAll("h2")
        const toc = [] as string[]
        headings.forEach((heading) => {
            toc.push(String(heading.textContent))
        })
        setToc(toc)
        }, [content])

    return (
        <VStack
            align="center"
            width="100%">
            <HStack
                widthMobile="100%"
                width="50%"
                justify="flex-start"
                margin="0 0 30px 0">
                <VStack
                    align="flex-start">
                    <LargeHeading>Topic View</LargeHeading>
                    <HStack
                        width="150px"
                        justify= {editing ? "flex-start" : "space-between"}
                        align="center"
                        margin="-50px 0 0 0">
                        <EditButton
                            editing={editing}
                            onClick={handleEdit}>
                            {editing ? 'Done' : 'Edit'}
                        </EditButton>
                        <IoInformationCircleOutline
                            size={20} />
                        {
                            !editing && (
                                <>
                                    <IoArchiveOutline
                                        size={20} />
                                    <IoTrashOutline
                                        size={20} />
                                </>
                            )
                        }
                    </HStack>
                </VStack>
            </HStack>
            {
                (!editing && toc?.length > 0) && (
                    <TableOfContents>
                    <Subtitle>Table of Contents</Subtitle>
                    {
                        toc.map((item, index) => (<Item key={index}>{item}</Item> ))
                    }
                </TableOfContents>
                )
            }
            {editing ? <Tiptap /> : <Reader />}
        </VStack>
    )
}

export default TopicView