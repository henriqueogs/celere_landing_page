import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

interface NavButtonProps {
    border?: boolean;
    background?: boolean;
}

// const NavContainer = styled.div`
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: center;
// `;

const NavLink = styled.a`
    color: ${({ theme }) => theme.colors.text};
    text-shadow: 0.125rem 0.125rem 0.250rem rgba(0, 0, 0, 0.7);
    transition: 0.3s opacity;

    &:hover {
        opacity: 0.6;
    }
`;

const NavMenu = styled(Nav)`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
padding: 1rem 0;
gap: 1rem;

@media(min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    width: auto;
    padding: 0;
    gap: 2rem;
}
`;

const NavBarCollapse = styled(Navbar.Collapse)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 10vw;
`

const NavButton = styled.a<NavButtonProps>`
padding: ${({ border }) => (border ? '1rem 1.45rem' : '1.2rem 1.65rem')};
border-radius: 5rem;
background: ${({ background, theme }) =>
        background
            ? `linear-gradient(to right, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`
            : 'transparent'
    };
border: ${({ border }) => (border ? "0.2rem solid #FFF" : "none")};
color: ${({ theme }) => theme.colors.text};
transition: background 0.2s ease -in -out, color 0.2s ease -in -out;

    &:hover {
    background: white;
    color: ${({ theme }) => theme.colors.primary};
}
`;

// CollapsedNavMenu.tsx
const CollapsedContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 30%;
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    padding: 2rem;
    z-index: 1000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    nav {
        display: flex;
        flex-direction: column;
    }
`;

export { NavLink, NavBarCollapse, NavButton, NavMenu, CollapsedContainer };
