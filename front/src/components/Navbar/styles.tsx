import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    color: #000000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);

  
  @media (max-width: 768px) {
    top: auto;
    bottom: 0;
    border-top: 1px solid #4f4f4f;
    background-color: white;
    justify-content: center;
    }
`;

const Beta = styled.span`
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
    border-radius: 0.4rem;
    margin-left: 10px;
    border: 2px solid #000000;
    font-weight: bolder;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    width: 150px;
    @media (max-width: 768px) {
    display: none;
    }
`;

const MobileLogo = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 80px;
    padding-left: 15px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);

    @media (min-width: 768px) {
    display: none;
    }
`

const NavLinks = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 0;
    list-style: none;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

interface NavLinkProps {
    active?: string; // DOM elements can't have boolean attributes
}

const NavLink = styled(Link)`
    height: 40px;
    margin: 2px;
    font-weight: 700;
    background-color: transparent;
    border-radius: 10px;
    padding: 5px;
    display: flex;
    align-items: center;
    color: ${(props: NavLinkProps) => props.active === "true" ? "#d19a06" : "black"};
    font-weight: ${(props: NavLinkProps) => props.active === "true" ? "900" : "400"};
    text-decoration: none;
    
    svg {
        margin: 1px;
    }

    &:hover {
        background-color: #b9b4b421;
        border-radius: 10px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        height: 60px;
        width: 60px;
        font-size: small;
        align-items: center;
        svg{
            width: 40px;
            height: 40px;
        }
    }

`;

export { Nav, Beta, Logo, MobileLogo, NavLinks, NavLink };