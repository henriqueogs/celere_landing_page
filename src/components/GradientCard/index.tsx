import { ParagraphContainer } from "../../pages/LandingPage/styles";
import { NavButton } from "../NavBar/styles";
import { CardContainer, CardImage, CardImageContainer, HorizontalLine } from "./styles";

interface GradientCardProps {
    title?: string;
    text?: string;
    imgSrc: string | undefined;
    link?: string;
}

export default function GradientCard({ title, text, imgSrc, link }: GradientCardProps) {
    return <CardContainer>
        <CardImageContainer>
            <CardImage src={imgSrc} />
        </CardImageContainer>
        <h2>{title}</h2>
        <HorizontalLine />
        <ParagraphContainer width="70%">{text}</ParagraphContainer>
        <NavButton background href={link} >LinkedIn</NavButton>
    </CardContainer>
}