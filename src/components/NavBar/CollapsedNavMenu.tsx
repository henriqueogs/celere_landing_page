import React, { useEffect } from 'react';
import { CloseButton } from './styles'; // Import the styled button
import { CollapsedContainer, NavbarNav, NavbarNavLink, Divider } from './styles'; // Assuming these exist

const CollapsedNavMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    useEffect(() => {
        console.log('enter collapsedMenu');
    }, []);

    return (
        <CollapsedContainer>
            <CloseButton onClick={onClose}>X</CloseButton>
            <NavbarNav>
                <NavbarNavLink href="#about">SOBRE</NavbarNavLink>
                <NavbarNavLink href="#services">SERVIÇOS</NavbarNavLink>
                <NavbarNavLink href="#technologies">TECNOLOGIAS</NavbarNavLink>
                <NavbarNavLink href="#team">A EQUIPE</NavbarNavLink>
                <Divider />
                <NavbarNavLink href="#">Fale conosco</NavbarNavLink>
                <NavbarNavLink href="#">Login</NavbarNavLink>
            </NavbarNav>
        </CollapsedContainer>
    );
};

export default CollapsedNavMenu;
