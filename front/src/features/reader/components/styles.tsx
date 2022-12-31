import styled from "styled-components"


const TableOfContents = styled.ol`
    margin: 0;
    padding: 0 0 10px 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border: 2px solid #1f1f1f;
    border-radius: 5px;
`

const Item = styled.li`
    margin-left: 20px;  
    margin-bottom: 10px;
    padding: 0;
    font-size: large;
    font-weight: 500;
    color: #1f1f1f;
    cursor: pointer;
`

export {TableOfContents, Item}