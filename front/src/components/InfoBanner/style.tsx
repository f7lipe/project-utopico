import styled from 'styled-components'

interface InfoBannerProps {
    color?: string
}

const Banner = styled.div`
    background-color: ${({ color }: InfoBannerProps) => color || "#f5f5f5"};
    padding: 20px;
    border-radius: 5px;
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: sticky;
    top: 80px;
`
export default Banner