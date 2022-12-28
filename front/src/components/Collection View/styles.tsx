import styled from "styled-components"

const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    
    @media (max-width: 768px) {
        justify-content: center;
    }
`

export default Container;