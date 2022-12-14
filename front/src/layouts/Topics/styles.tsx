import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TopicToolbar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    position: sticky;
    top: 80px;
    background-color: #fff;
    
    padding: 0 20px;  
`;

const NewTopicButton = styled.button`
    background-color: #fff;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    display: flex;
    align-items: center;
    color: #000;
    padding: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #e2e2e2;
    }
`;


export { Container, TopicToolbar, NewTopicButton }