import ColoredHeading from "../../components/ColoredHeading"
import MainContainer from "../../components/MainContainer"
import NavBar from "../../components/NavBar"
import WebirdImage from "../../assets/webird_1.jpg"
import WebirdImageLarge from "../../assets/webird_2.jpg"
import ComplexityIcon from "../../assets/complexity_icon.png"
import ArrowLargeRight from "../../assets/arrow_large_right.svg"
import { NavButton } from "../../components/NavBar/styles.tsx"
import { Container, HeadingContainer, ParagraphContainer, StyledIcon } from "./styles.tsx"
import PictureRectangle from "../../components/PictureRectangle/index.tsx"
import { Heading } from "../../components/ColoredHeading/styles.tsx"
import { RectangleContainerLarge, RectanglePicture } from "../../components/PictureRectangle/styles.tsx"

export default function LandingPage() {
    return <MainContainer height="120rem">
        <NavBar />
        {/* Área inicial (primeiro "bloco") */}
        <Container height="30rem">
            <Container height="30rem" direction="column">
                <HeadingContainer>
                    <ColoredHeading gradient>Olá, </ColoredHeading>
                    <ColoredHeading> nós somos a </ColoredHeading>
                    <ColoredHeading gradient>CÉLERE</ColoredHeading>
                </HeadingContainer>

                <ParagraphContainer>Criamos software de ponta para impulsionar seu crescimento.
                    Com tecnologia avançada e especialistas em programação,
                    oferecemos soluções personalizadas para seu negócio.
                    Transforme sua experiência digital.
                </ParagraphContainer>

                <Container align="center" width="20rem">
                    <NavButton background href='#'>Conheça já</NavButton>&nbsp;&nbsp;
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
            <Container width="70vw">
                <Container width="90%" direction="column">
                    <Heading>NÓS CUIDAMOS</Heading>
                    <Container height="8vh" direction="column" width="120%">
                        <Heading fontWeight="300">DA COMPLEXIDADE</Heading>
                        <a href='#'>
                            <img src={ArrowLargeRight} />
                        </a>
                    </Container>
                </Container >
            </Container>

            <Container height="80%" direction="column">
                <img width={"360px"} src={ComplexityIcon} />
                <ParagraphContainer width="38.625rem">
                    Não se preocupe com servidores, hospedagem,
                    segurança, programação e outras coisas mais.
                    Cuidamos de tudo para que você possa se
                    concentrar no que faz de melhor!
                </ParagraphContainer>
            </Container>
        </Container>

        <Container>
            <Container width="50%">
                <RectangleContainerLarge>
                    <RectanglePicture src={WebirdImageLarge} />
                </RectangleContainerLarge>
            </Container>
        </Container>

    </MainContainer>
}