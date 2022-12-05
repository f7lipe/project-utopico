import styled from "styled-components"

interface IContainerProps {
    width?: string
    height?: string
    visible?: boolean
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    visibility: ${(props: IContainerProps) => props.visible ?  "visible" : "hidden"};
    height: ${(props: IContainerProps) => props.visible ?  "92%" : 0};
    padding: 20px;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
    scroll-behavior: auto;
    overflow: scroll;
    overflow-x: hidden;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    bottom: 0;
    transition: all 0.3s ease-in;
    /* width */
    ::-webkit-scrollbar {
         width: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
         background: #555; 
    }
`;

const Background = styled.div`
    .blur {
    -webkit-backdrop-filter: blur(15rem);
    backdrop-filter: blur(15rem);
    }
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #3f3f3f3c;
    visibility: ${(props: IContainerProps) => props.visible ?  "visible" : "hidden"};
    z-index: 1; 
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export { Container, Background };