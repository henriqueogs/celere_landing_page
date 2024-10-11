import { NavButton, NavContainer, NavLink, NavMenu } from "./styles";

export default function NavBar() {
    return <NavContainer>
        {/* LOGO Celere */}
        <img src="src\assets\celere_logo.svg" alt="Logo" />

        {/* MENU da navbar */}
        <NavMenu width="31rem">
            <NavLink href='#'>ABOUT</NavLink>
            <NavLink href='#'>SERVICES</NavLink>
            <NavLink href='#'>TECHNOLOGIES</NavLink>
            <NavLink href='#'>HOW TO</NavLink>
        </NavMenu>

        {/* BUTTONS da navbar */}

        <NavMenu width="21rem">
            <NavButton border href='#'>Contact us</NavButton>
            <NavButton background href='#'>Join Hydra</NavButton>
        </NavMenu>

    </NavContainer>
}