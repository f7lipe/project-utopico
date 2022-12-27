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
    min-height: 85px;
    position: sticky;
    top: 80px;
    background-color: #fff;
    box-shadow: 0px 20px 20px -20px #d2d1d1; 
`;



export { Container, TopicToolbar }