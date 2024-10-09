import { NavButton, NavContainer, NavLink, NavMenu } from "./styles";

export default function NavBar() {
    return <NavContainer>
        {/* LOGO Celere */}
        <img src="src\assets\celere_logo.svg" alt="Logo" />

        {/* MENU da navbar */}
        <NavMenu width="22.7rem">
            <NavLink href='#'>About</NavLink>
            <NavLink href='#'>Services</NavLink>
            <NavLink href='#'>Technologies</NavLink>
            <NavLink href='#'>How To</NavLink>
        </NavMenu>

        {/* BUTTONS da navbar */}

        <NavMenu width="20.4rem">
            <NavButton border href='#'>Contact us</NavButton>
            <NavButton background href='#'>Join Hydra</NavButton>
        </NavMenu>

    </NavContainer>
}