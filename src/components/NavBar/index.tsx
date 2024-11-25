import { useEffect, useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import CelereLogo from "../../assets/celere_logo.svg"

import { NavBarCollapse, NavButton, NavLink, NavMenu } from "./styles";
import StyledToggle from "./StyledToggle";
import CollapsedNavMenu from "./CollapsedNavMenu";
export default function NavBar() {
    const [isMobile, setIsMobile] = useState(false);
    const [isCollapsedOpen, setIsCollapsedOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 992);
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <Navbar expand="lg" style={{ width: "100%" }}>
        {/* LOGO Celere */}
        <Container style={{ width: "100%" }} fluid>
            <Navbar.Brand href="/">
                <img width="200px" src={CelereLogo} alt="Logo" />
            </Navbar.Brand>
            {isMobile ? (<>
                <StyledToggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => setIsCollapsedOpen(!isCollapsedOpen)}
                />
                {isCollapsedOpen && (
                    <CollapsedNavMenu onClose={() => setIsCollapsedOpen(false)} />
                )}
            </>
            ) : (
                <NavBarCollapse>
                    <NavMenu>
                        <NavLink href="#about">SOBRE</NavLink>
                        <NavLink href="#services">SERVIÇOS</NavLink>
                        <NavLink href="#technologies">TECNOLOGIAS</NavLink>
                        <NavLink href="#team">EQUIPE</NavLink>
                    </NavMenu>

                    <NavMenu>
                        <NavButton border href="#">
                            Fale conosco
                        </NavButton>
                        <NavButton background href="#">
                            Login
                        </NavButton>
                    </NavMenu>
                </NavBarCollapse >)
            }

        </Container >
    </Navbar >
}