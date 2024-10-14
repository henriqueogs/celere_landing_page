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
    width: 80%;
    margin-bottom: 12rem;
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
    display: inline;
    padding: ${({ border }) => border ?  '1rem 1.45rem' : '1.2rem 1.65rem'};
    border-radius: 5rem;
    background: ${({ background, theme }) =>
        background
            ? `linear-gradient(to right, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`
            : 'transparent'
    };
    border: ${({ border }) => border ? "0.2rem solid #FFF" : ""};    
    color: ${({ theme }) => theme.colors.text}
`

export { NavContainer, MainLogo, NavMenu, NavLink, NavButton }