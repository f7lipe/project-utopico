import { TableOfContents, Item } from "./styles"
import { Subtitle } from "../Typografies"

const TOC = ({ toc }: { toc: String[] }) => {
    return (
        <TableOfContents>
            <Subtitle>TABLE OF CONTENTS</Subtitle>
            {
                toc.map((item, index) => (<Item key={index}>{item}</Item>))
            }
        </TableOfContents>
    )
}

export default TOC