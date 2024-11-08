import React, { useEffect } from 'react';
import { CollapsedContainer, NavLink } from './styles';

const CollapsedNavMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    useEffect(() => { console.log("enter collapsedMenu") }, [])

    return <CollapsedContainer>
        <button onClick={onClose} style={{ alignSelf: 'flex-end' }}>X</button>
        <nav>
            <NavLink href='#about'>SOBRE</NavLink>
            <NavLink href='#services'>SERVIÇOS</NavLink>
            <NavLink href='#technologies'>TECNOLOGIAS</NavLink>
            <NavLink href='#portfolio'>PORTFOLIO</NavLink>
            <NavLink href='#'>Fale conosco</NavLink>
            <NavLink href='#'>Login</NavLink>
        </nav>
    </CollapsedContainer>
};

export default CollapsedNavMenu;
