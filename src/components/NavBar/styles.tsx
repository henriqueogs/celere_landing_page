import { Nav, Navbar } from "react-bootstrap";
import styled, { keyframes } from "styled-components";

interface NavButtonProps {
    border?: boolean;
    background?: boolean;
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

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
  padding: ${({ border }) => (border ? "1rem 1.45rem" : "1.2rem 1.65rem")};
  border-radius: 5rem;
  background: ${({ background, theme }) =>
        background
            ? `linear-gradient(to right, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`
            : "transparent"};
  border: ${({ border }) => (border ? "0.2rem solid #FFF" : "none")};
  color: ${({ theme }) => theme.colors.text};
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background: white;
    color: ${({ theme }) => theme.colors.primary};
    animation: ${fadeIn} 0.08s ease-in-out both;
  }
`;


// CollapsedNavMenu.tsx
const CollapsedContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 60%;
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

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.line};
  }
`;

// Styles for the Nav container
export const NavbarNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0 0.5rem; /* Add spacing between NavLink items */
  width: 100%; /* Ensure it spans the container width */
`;

// Styling for individual NavLinks
export const NavbarNavLink = styled.a`
  text-decoration: none;
  font-size: 1rem; /* Slightly larger font for mobile readability */
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem 1rem; /* Add padding for touch optimization */
  border-radius: 0.5rem; /* Rounded edges for a smoother touch UI */
  width: 100%; /* Span full width of the nav for easier tapping */
  text-align: left;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`;

// Styling for the horizontal line
export const Divider = styled.hr`
  width: 100%; /* Span the width of the nav */
  border: none;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.line};
  margin: 0.5rem 0; /* Add some spacing above and below the line */
`;


export { NavLink, NavBarCollapse, NavButton, NavMenu, CollapsedContainer, CloseButton };
