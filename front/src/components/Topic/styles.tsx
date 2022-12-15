import styled from "styled-components"

const Body = styled.div`
    width: 170px;
    height: 170px;
    margin:5px;
    background-color: #e2e2e28c;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #cbfeaa;
    }
`

export { Body }