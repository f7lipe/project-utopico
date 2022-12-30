import styled from "styled-components"

interface props{
    backgroundColor?: string
    foregroundColor?: string
}

const MenuButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
margin: 5px;
border-radius: 5px;
border: none;
font-size: larger;
background-color: ${(props:props):string => props.backgroundColor || "white"};
:hover {
    background-color: black;
    color: white;
}
:focus {
    background-color: black;
    color: white;
}
`

export default MenuButton