import styled from "styled-components";

interface NavMenuProps {
    width?: string;
}

interface NavButtonProps {
    border?: boolean;
    background?: boolean;
}

const NavContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10rem;
`;

const MainLogo = styled.img`
    width: 18%
`;

const NavMenu = styled.div<NavMenuProps>`
    display: flex;
    justify-content: space-between;
    width: ${({ width }) => width || 'auto'};;
`

const NavLink = styled.a`
    color: ${({ theme }) => theme.colors.text};
    text-shadow: 0.125rem 0.125rem 0.250rem rgba(0, 0, 0, 0.7); /* sombra em "rgba" pela opacidade */
`;

const NavButton = styled.a<NavButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 9rem;
    height: 2.8rem;
    border-radius: 5rem;
    border: ${({ border }) => border ? "0.2rem solid #FFF" : "0.2rem solid transparent"};
    background: ${({ background, theme }) =>
        background
            ? `linear-gradient(to right, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`
            : ""
    };
    color: ${({ theme }) => theme.colors.text}
`

export { NavContainer, MainLogo, NavMenu, NavLink, NavButton }