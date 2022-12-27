import { Nav, Beta, NavLinks, NavLink } from "./styles"
import { Link, useLocation } from "react-router-dom"
import { HStack } from "../Stack View/HStack"
import { AiOutlineGithub, AiOutlineSearch } from "react-icons/ai"
import { RxText } from "react-icons/rx"

enum Paths {
    SEARCH = "/search",
    GITHUB = "/github",
    LOGOUT = "/",
    TOPICS = "/topics"
}

const Navbar = () => {
    const location = useLocation();
    const isActive = (buttonPath: string) => {
        return location.pathname === buttonPath;
      }

    return (
        <Nav>
            <HStack width="150px">
                <p>utópico</p>
                <Beta>1.0 BETA</Beta>
            </HStack>
            <NavLinks>
                <NavLink active={(location.pathname.includes(Paths.TOPICS))}>
                    <RxText size="20px" />
                    <Link to={Paths.TOPICS}>Topics</Link>
                </NavLink>
                 {/* 
                <NavLink active={isActive(Paths.SEARCH)}>
                    <AiOutlineSearch size="20px" />
                    <Link to={Paths.SEARCH}>Search</Link>
                </NavLink>
                 */}
                <NavLink>
                    <AiOutlineGithub size="20px" />
                    <Link to={Paths.GITHUB}>GitHub</Link>
                </NavLink>
                {/* 
                <NavLink>
                    <Link to={Paths.LOGOUT}>Logout</Link>
                </NavLink>
                */}
            </NavLinks>
        </Nav>
    );
};

export default Navbar;