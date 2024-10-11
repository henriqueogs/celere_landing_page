import ColoredHeading from "../../components/ColoredHeading"
import MainContainer from "../../components/MainContainer"
import NavBar from "../../components/NavBar"
import { NavButton } from "../../components/NavBar/styles.tsx"
import { Container, HeadingContainer, ParagraphContainer } from "./styles.tsx"

export default function LandingPage() {
    return <MainContainer height="50rem">
        <NavBar />

        {/* Área inicial (primeiro "bloco") */}
        <Container height="26.6rem">
            <HeadingContainer>
                <ColoredHeading gradient>Dive</ColoredHeading>
                <ColoredHeading> Into The Depths Of</ColoredHeading>
                <ColoredHeading gradient> Virtual Reality</ColoredHeading>
            </HeadingContainer>

            <ParagraphContainer>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
                nisl tincidunt eget. Lectus mauris eros in vitae .
            </ParagraphContainer>

            <div style={{ height: '4rem' }}>
                <NavButton background href='#'>Build Your World</NavButton>&nbsp;&nbsp;&nbsp;
                <a href='#'>→</a>
            </div>
        </Container>

    </MainContainer>
}