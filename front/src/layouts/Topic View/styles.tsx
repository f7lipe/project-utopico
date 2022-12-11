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

export default EditButton