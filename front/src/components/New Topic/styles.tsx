import styled from "styled-components"
interface Props {
    visible: boolean
}

const Button = styled.button`
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: #000;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: ${(props: Props) => props.visible ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    :disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`

const NewTopicForm = styled.form`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-bottom: 10px;
    margin-top: 10px;
    @media (max-width: 768px) {
        width: 100%;
    }
`


export { Button, NewTopicForm } 