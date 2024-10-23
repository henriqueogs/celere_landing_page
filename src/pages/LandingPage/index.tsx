import ColoredHeading from "../../components/ColoredHeading"
import MainContainer from "../../components/MainContainer"
import NavBar from "../../components/NavBar"
import WebirdImage from "../../assets/webird_1.jpg"
import WebirdImageLarge from "../../assets/webird_2.jpg"
import ComplexityIcon from "../../assets/complexity_icon.png"

import CardVR from "../../assets/card_VR.jpg";
import CardEducation from "../../assets/card_education.jpg";
import CardTravel from "../../assets/card_travel.jpg";
import CardSocial from "../../assets/card_social.jpg";

import ArrowLargeRight from "../../assets/arrow_large_right.svg"
import { NavButton } from "../../components/NavBar/styles.tsx"
import { Container, HeadingContainer, ParagraphContainer, StyledIcon } from "./styles.tsx"
import PictureRectangle from "../../components/PictureRectangle/index.tsx"
import { Heading } from "../../components/ColoredHeading/styles.tsx"
import { RectangleContainerLarge, RectanglePicture } from "../../components/PictureRectangle/styles.tsx"
import GradientCard from "../../components/GradientCard/index.tsx"

export default function LandingPage() {

    return <>
        <NavBar />
        <MainContainer height="175rem">
            {/* Área inicial (primeiro "bloco") */}
            <Container height="25rem">
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

                <Container>
                    <PictureRectangle src={WebirdImage} />
                </Container>
            </Container>

            {/* segundo "bloco" */}
            <Container>
                <Container width="70vw">
                    <Container height="10rem" width="90%" direction="column">
                        <Heading>NÓS CUIDAMOS</Heading>
                        <Heading fontWeight="300">DA COMPLEXIDADE</Heading>
                        <a href='#'>
                            <img src={ArrowLargeRight} />
                        </a>
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

            {/* terceiro "bloco" */}
            <Container height="50vh">
                <Container width="50%">
                    <RectangleContainerLarge>
                        <RectanglePicture src={WebirdImageLarge} />
                    </RectangleContainerLarge>
                </Container>

                <Container
                    // style={{ backgroundColor: "red" }} 
                    width="50%" height="30rem" direction="column" align="flex-start" >
                    <Heading>ABOUT</Heading>
                    <Heading fontWeight="300">HYDRA VR</Heading>
                    <ParagraphContainer width="38.625rem">
                        Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus
                        urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida
                        dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in.
                        Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet
                        sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
                        etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet
                        cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                        retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                        n tempor.
                    </ParagraphContainer>

                    <NavButton background href='#'>VAMOS ENTRAR EM CONTATO</NavButton>
                </Container >
            </Container>

            <Container>
                <Container width="70vw">
                    <Container height="10rem" width="90%" direction="column">
                        <Heading>WHY BUILD</Heading>
                        <Heading fontWeight="300">WITH HYDRA?</Heading>
                        <a href='#'>
                            <img src={ArrowLargeRight} />
                        </a>
                    </Container >
                </Container>

                <Container height="80%" direction="column">
                    <ParagraphContainer width="38.625rem">
                        Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </ParagraphContainer>
                </Container>
            </Container>

            {/* bloco de cards */}
            <Container direction="row">
                <GradientCard imgSrc={CardVR} title="TECHNOLOGY" text="Vitae sapien pellentesque habitant morbi
                                                                   nunc. Viverra aliquet  porttitor rhoncus" />
                <GradientCard imgSrc={CardEducation} title="EDUCATION" text="Vitae sapien pellentesque habitant morbi
                                                                   nunc. Viverra aliquet  porttitor rhoncus" />
                <GradientCard imgSrc={CardTravel} title="TRAVEL" text="Vitae sapien pellentesque habitant morbi
                                                                   nunc. Viverra aliquet  porttitor rhoncus" />
                <GradientCard imgSrc={CardSocial} title="SOCIAL" text="Vitae sapien pellentesque habitant morbi
                                                                   nunc. Viverra aliquet  porttitor rhoncus" />
            </Container>
        </MainContainer>
    </>
}