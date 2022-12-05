import { Container, Background } from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { HStack } from "../Stack View/HStack";
import { LargeHeading } from "../Typografies";

interface IBackdropProps {
    children: React.ReactNode;
    title?: string;
    isOpen?: boolean;
    redirectBackOnClose?: boolean;
}

function Backdrop({ children, title, isOpen, redirectBackOnClose }: IBackdropProps) {
    const [visible, setVisible] = useState(isOpen);
    const navigate = useNavigate();
    const close = () => {
        setVisible(false);
        if (redirectBackOnClose) {
            navigate(-1)
        }
    }

    return (
        <Background visible={visible}>
            <Container visible={visible}>
                <HStack width="100%" height="20px" justify="flex-end">
                    <button onClick={close}>X</button>
                </HStack>
                <HStack width="100%" height="50px" justify="flex-start">
                    <LargeHeading>{title}</LargeHeading>
                </HStack>
                {children}
            </Container>
        </Background>
    );
}

export default Backdrop;