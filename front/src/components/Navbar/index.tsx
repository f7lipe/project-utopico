import { Nav, Logo, MobileLogo, Beta, NavLinks, NavLink } from "./styles"
import { useLocation } from "react-router-dom"
import { AiOutlineGithub, AiOutlineSearch } from "react-icons/ai"
import { RxText } from "react-icons/rx"

enum Paths {
    SEARCH = "/search",
    GITHUB = "https://github.com/f7lipe/project-utopico",
    PROFILE = "/profile",
    TOPICS = "/topics"
}

const Navbar = () => {
    const location = useLocation()

    const isActive = (buttonPath: string) => {
        return location.pathname === buttonPath;
    }

    return (
        <>
            <MobileLogo >
                <p>utópico</p>
                <Beta>1.0 BETA</Beta>
            </MobileLogo>
            <Nav>
                <Logo >
                    <p>utópico</p>
                    <Beta>1.0 BETA</Beta>
                </Logo>

                <NavLinks>

                    <NavLink
                        to={Paths.TOPICS}
                        active={String(location.pathname.includes(Paths.TOPICS))}>
                        <RxText size="20px" />
                        Topics
                    </NavLink>

                    <NavLink
                        to={Paths.SEARCH}
                        active={String(isActive(Paths.SEARCH))}>
                        <AiOutlineSearch size="20px" />
                        Search
                    </NavLink>

                    <NavLink
                        to={""}
                        onClick={() => window.location.href = Paths.GITHUB}>
                        <AiOutlineGithub size="20px" />
                        GitHub
                    </NavLink>

                    {/* 
                    <NavLink to={Paths.Profile}>
                        Profile
                    </NavLink>
                    */}
                </NavLinks>
            </Nav>
        </>
    )
}

export default Navbar