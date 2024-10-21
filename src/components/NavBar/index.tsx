import { NavButton, NavContainer, NavLink, NavMenu } from "./styles";

export default function NavBar() {
    return <NavContainer>
        {/* LOGO Celere */}
        <img src="src\assets\celere_logo.svg" alt="Logo" />

        {/* MENU da navbar */}
        <NavMenu width="31rem">
            <NavLink href='#'>SOBRE</NavLink>
            <NavLink href='#'>SERVIÇOS</NavLink>
            <NavLink href='#'>TECNOLOGIAS</NavLink>
            <NavLink href='#'>PORTFOLIO</NavLink>
        </NavMenu>

        {/* BUTTONS da navbar */}

        <NavMenu width="21rem">
            <NavButton border href='#'>Fale conosco</NavButton>
            <NavButton background href='#'>Login</NavButton>
        </NavMenu>
    </NavContainer>
}