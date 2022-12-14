import { Outlet } from 'react-router-dom'
import { Sidebar, Content } from "./styles"
import { HStack } from "../../components/Stack View/HStack"

interface ISplitViewProps {
    title?: string;
    id?: string;
}

function SplitView({ title, id }: ISplitViewProps) {
    return (
        <HStack>
            <Sidebar title={title}/>
            <Content>
                <Outlet />
            </Content>
        </HStack>
    );
}

export default SplitView
