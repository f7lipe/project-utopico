import styled from "styled-components"

const Background = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position:fixed;
    top: 80px;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    -webkit-backdrop-filter: blur(20px);
     backdrop-filter: blur(20px);
`

const Body = styled.div`
    width: 300px;
    border: 2px solid #000;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;

    @media (max-width: 768px) {
        width: 90%;
    }
`

const Button = styled.button`
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: #000;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    margin-top: 20px;
    cursor: pointer;
`

const NewTopicForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Input = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #000;
    font-weight: bolder;
    font-size: 16px;
    color: black;
    background-color: #e6e1e147;
    border-radius: 10px;
    padding: 10px;
    margin-top: 20px;
`

export { Background, Body, Button, NewTopicForm, Input } 