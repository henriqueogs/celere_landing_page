import ColoredHeading from "../../components/ColoredHeading"
import MainContainer from "../../components/MainContainer"
import NavBar from "../../components/NavBar"
import WebirdImage from "../../assets/webird_1.jpg"
import { NavButton } from "../../components/NavBar/styles.tsx"
import { Container, HeadingContainer, ParagraphContainer, StyledIcon } from "./styles.tsx"
import PictureRectangle from "../../components/PictureRectangle/index.tsx"
import { Heading } from "../../components/ColoredHeading/styles.tsx"

export default function LandingPage() {
    return <MainContainer height="100rem">
        <NavBar />
        {/* Área inicial (primeiro "bloco") */}
        <Container height="30rem">
            <Container height="30rem" direction="column">
                <HeadingContainer>
                    <ColoredHeading gradient>Dive</ColoredHeading>
                    <ColoredHeading> Into The Depths Of</ColoredHeading>
                    <ColoredHeading gradient> Virtual Reality</ColoredHeading>
                </HeadingContainer>

                <ParagraphContainer>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    nisl tincidunt eget. Lectus mauris eros in vitae .
                </ParagraphContainer>

                <Container width="20rem">
                    <NavButton background href='#'>Build Your World</NavButton>&nbsp;&nbsp;&nbsp;
                    <a href='#'>
                        <StyledIcon color="secondary" icon="charm:arrow-right" />
                    </a>
                </Container>
            </Container>

            <div>
                <PictureRectangle src={WebirdImage} />
            </div>
        </Container>

        {/* segundo "bloco" */}
        <Container>
            <Container width="50%">
                <Container width="60%" direction="column">
                    <Heading>INTRODUCTION</Heading>
                    <Container width="100%"><Heading fontWeight="200">TO HYDRA VR</Heading> <a href='#'>
                        <StyledIcon color="tertiary" icon="charm:arrow-right" />
                    </a></Container>
                </Container >
            </Container>

            <ParagraphContainer width="40.625rem">
                Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
            </ParagraphContainer>
        </Container>

    </MainContainer>
}