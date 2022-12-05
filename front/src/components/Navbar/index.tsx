import { Nav, Beta, NavLinks, NavLink } from "./styles"
import { Link } from "react-router-dom"
import { HStack } from "../Stack View/HStack"
import {AiOutlineGithub, AiOutlineSearch} from "react-icons/ai"

const Navbar = () => {
    return (
        <Nav>
            <HStack width="150px">
                <p>utópico</p>
                <Beta>1.0 BETA</Beta>
            </HStack>
            <NavLinks>
                <NavLink>
                    <AiOutlineSearch size="1.5rem"/>
                    <Link to="/search">Search</Link>
                </NavLink>
                <NavLink>
                    <AiOutlineGithub size="1.5rem" />
                    <Link to="/github">GitHub</Link>
                </NavLink>
                <NavLink>
                    <Link to="/">Logout</Link>
                </NavLink>
            </NavLinks>
        </Nav>
    );
};

export default Navbar;