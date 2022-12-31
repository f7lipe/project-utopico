import { TableOfContents, Item } from "./styles"
import { Subtitle } from "../../../components/Typografies"

const TOC = ({ items }: { items: String[] }) => {
    return (
        <TableOfContents>
            <Subtitle>TABLE OF CONTENTS</Subtitle>
            {
                items.map((item, index) => (<Item key={index}>{item}</Item>))
            }
        </TableOfContents>
    )
}

export default TOC