import styled from 'styled-components'

interface InfoBannerProps {
    color?: string
}

const Notifications = styled.div`
    position: sticky;
    top: 80px;
    width: 100%;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
`

const Banner = styled.div`
    background-color: ${({ color }: InfoBannerProps) => color || "#f5f5f5"};
    padding: 20px;
    border-radius: 5px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    z-index: 3;
`
export {Notifications, Banner}