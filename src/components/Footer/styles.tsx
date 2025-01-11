import styled from "styled-components";

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const MainContainer = styled(Col)`
    width: 70vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const FooterContainer = styled(Row)`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 10rem;
    width: 60vw;
    margin-top: 3rem;
`

const CelereLogoContainer = styled.img`
    width: 11.40rem;
    padding: 0;
    margin: 0;
    margin-right: -2rem;
`

const CelereLogoMobile = styled(CelereLogoContainer)`
    width: 5.70rem;
    margin: 0;
`

const FadedColumn = styled.img`
    padding: 0;
    width: 0.375rem;
    height: 12.31rem;
    opacity: 1;
`

const MobileContainer = styled.div`
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const MenuList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 50%;
    height: 70%;
    list-style: none;
    
    li {
        box-sizing: border-box;
    }
`

const MenuListMobile = styled.ul`
    margin: 0;
    display: flex;
    height: 10rem;
    width: 100%;
    flex-direction: column;
    list-style: none;
    justify-content: space-between;
`

const VerticalLine = styled.div`
    padding: 0;
    width: 0.1rem;
    height: 9rem;
    background: 
        linear-gradient(
            to bottom, 
            ${({ theme }) => theme.colors.secondary} 0%, 
            ${({ theme }) => theme.colors.tertiary} 35%, 
            ${({ theme }) => theme.colors.background} 50%, 
            ${({ theme }) => theme.colors.secondary} 100%
            )
        `;

const HorizontalLine = styled.div`
    width: 90%;
    height: 0.1rem;
    margin-top: 2rem;
    background: ${({ theme }) => theme.colors.secondary};
    background: 
        linear-gradient(
            90deg, 
            ${({ theme }) => theme.colors.secondary} 0%, 
            ${({ theme }) => theme.colors.tertiary} 35%, 
            ${({ theme }) => theme.colors.background} 69%, 
            ${({ theme }) => theme.colors.secondary} 100%
            )
        `;

export { MainContainer, FooterContainer, CelereLogoContainer, CelereLogoMobile, FadedColumn, MobileContainer, MenuList, MenuListMobile, VerticalLine, HorizontalLine };