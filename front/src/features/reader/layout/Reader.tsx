import { useEffect, useState } from "react"
import { HStack } from "../../../components/Stack View/HStack"
import { VStack } from "../../../components/Stack View/VStack"
import { TOCQUERY } from "../data/constants"
import TOC from "../components/TOC"
import generateTOC from "../utils/generateTOC"

interface Props {
    content: string 
}

const Reader = ({ content }: Props) => {
    const [tocItems, setTocItems] = useState<String[] | []>([])
    const isTocItemsEmpty = tocItems.length === 0

    useEffect(() => {
        if (!content) return
        const generatedToc = generateTOC(content, TOCQUERY)
        setTocItems(generatedToc)
    }, [content])

    return (
        <VStack width="70%"
            widthMobile="100%"
            padding="10px">
            {!isTocItemsEmpty && <TOC items={tocItems} />}
            <HStack justify="flex-start">
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </HStack>
        </VStack>
    )
}

export default Reader