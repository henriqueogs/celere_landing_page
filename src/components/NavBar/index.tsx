import { NavButton, NavContainer, NavLink, NavMenu } from "./styles";

export default function NavBar() {
    return <NavContainer>
        {/* LOGO Celere */}
        <img src="src\assets\celere_logo.svg" alt="Logo" />

        {/* MENU da navbar */}
        <NavMenu width="31rem">
            <NavLink href='#about'>SOBRE</NavLink>
            <NavLink href='#services'>SERVIÇOS</NavLink>
            <NavLink href='#technologies'>TECNOLOGIAS</NavLink>
            <NavLink href='#portfolio'>PORTFOLIO</NavLink>
        </NavMenu>

        {/* BUTTONS da navbar */}

        <NavMenu width="21rem">
            <NavButton border href='#'>Fale conosco</NavButton>
            <NavButton background href='#'>Login</NavButton>
        </NavMenu>
    </NavContainer>
}