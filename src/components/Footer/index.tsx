import { FooterContainer, CelereLogoContainer, MenuList, MainContainer, HorizontalLine, VerticalLine, CelereLogoMobile, MenuListMobile, MobileContainer } from "./styles";

import CelereLogo from "../../assets/celere_brain_logo.svg"
import { NavLink } from "../NavBar/styles";
import { useEffect, useState } from "react";

const Footer = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 992);
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <MainContainer>
        {isMobile ? (<MobileContainer>
            <CelereLogoMobile src={CelereLogo} />
            <MenuListMobile>
                <li><NavLink href="#about">SOBRE</NavLink></li>
                <li><NavLink href="#services">SERVIÇOS</NavLink></li>
                <li><NavLink href="#technologies">TECNOLOGIAS</NavLink></li>
                <li><NavLink href="#team">EQUIPE</NavLink></li>
            </MenuListMobile>
        </MobileContainer>)
            :
            (<FooterContainer>
                <CelereLogoContainer src={CelereLogo} />
                <VerticalLine />
                <MenuList>
                    <li><NavLink href="#about">SOBRE</NavLink></li>
                    <li><NavLink href="#services">SERVIÇOS</NavLink></li>
                    <li><NavLink href="#technologies">TECNOLOGIAS</NavLink></li>
                    <li><NavLink href="#team">EQUIPE</NavLink></li>
                </MenuList>
                <VerticalLine />
            </FooterContainer>)}
        <HorizontalLine />
    </MainContainer>
}

export default Footer;