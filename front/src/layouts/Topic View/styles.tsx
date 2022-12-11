import styled from "styled-components"

interface EditButtonProps {
    editing: boolean
}

const EditButton = styled.a`
    font-size: medium;
    font-weight: ${(props: EditButtonProps) => props.editing ? 300 : 800};
    font-weight: 500;
    color: ${(props: EditButtonProps) => props.editing ? '#49af3b' : '#1f1f1f'};
    margin-right: 10px;
    margin-left: 10px;
    cursor: pointer;
`

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

export {EditButton, TableOfContents, Item}