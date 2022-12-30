import styled from "styled-components"
import { Link } from "react-router-dom"

const Body = styled(Link)`
    text-decoration: none;
    color: #000000;
    width: 170px;
    height: 170px;
    margin:5px;
    //background-color: #e2e2e28c;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #dfdfdf47;
        h1{ 
            text-shadow: 0cm 0.5cm 0.5cm #3f3e3e;
        }
    }
`

export { Body }