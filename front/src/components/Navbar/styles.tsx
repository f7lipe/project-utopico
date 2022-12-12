import styled from 'styled-components';

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

  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
`;

const Beta = styled.span`
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
    border-radius: 0.4rem;
    margin-left: 10px;
    border: 2px solid #000000;
    font-weight: bolder;
`;

const Logo = styled.img`
    height: 3rem;
`;

const NavLinks = styled.ul`
    display: flex;
    list-style: none;
`;

interface NavLinkProps {
    active?: boolean;
}

const NavLink = styled.li`

    height: 40px;
    margin: 0 1rem;
    font-weight: 500;
    background-color: ${(props: NavLinkProps) => props.active ? "#fbf59cba" : "transparent"};
    border-radius: 10px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;

    a {
        text-decoration: none;
        color: #000000;
    }

    svg {
        margin-right: 0.5rem;
    }

    &:hover {
        background-color: #b9b4b421;
        border-radius: 10px;
        height: auto;
    }

`;

export { Nav, Beta, Logo, NavLinks, NavLink };