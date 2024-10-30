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

import { Container as BootstrapContainer, Row, Col, Button } from "react-bootstrap";

import PictureRectangle from "../../components/PictureRectangle/index.tsx"
import { Heading } from "../../components/ColoredHeading/styles.tsx"
import { RectangleContainerLarge, RectanglePicture } from "../../components/PictureRectangle/styles.tsx"
import GradientCard from "../../components/GradientCard/index.tsx"

export default function LandingPage() {
    return <>
        <NavBar />
        <MainContainer height="150rem">
            <BootstrapContainer
                className="text-center mt-5"
                id="about"
                style={{ height: "25rem", width: "100%" }}
            >
                <Row className="align-items-center justify-content-center" style={{ height: "100%" }}>
                    <Col xs={12} md={4} className="h-100 d-flex flex-column align-items-start justify-content-between mb-3">
                        <HeadingContainer>
                            <ColoredHeading gradient>Olá, </ColoredHeading>
                            <ColoredHeading> nós somos a </ColoredHeading>
                            <ColoredHeading gradient>CÉLERE</ColoredHeading>
                        </HeadingContainer>

                        <ParagraphContainer width="70%">
                            Criamos software de ponta para impulsionar seu crescimento.
                            Com tecnologia avançada e especialistas em programação,
                            oferecemos soluções personalizadas para seu negócio.
                            Transforme sua experiência digital.
                        </ParagraphContainer>

                        <Container height="auto" align="center" width="20rem">
                            <NavButton background href="#">Conheça já</NavButton>&nbsp;
                            <a href="#">
                                <StyledIcon color="secondary" icon="charm:arrow-right" />
                            </a>
                        </Container>
                    </Col>

                    <Col xs={12} md={4} className="d-flex flex-row-reverse align-items-center">
                        <PictureRectangle src={WebirdImage} />
                    </Col>
                </Row>

            </BootstrapContainer>

            {/* ANTIGO bloco 1 */}
            {/* <Container align="center" height="35rem" width="65%" id="about">
                <Container height="60%" direction="column">
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

                    <Container height="auto" align="center" width="20rem">
                        <NavButton background href='#'>Conheça já</NavButton>&nbsp;
                        <a href='#'>
                            <StyledIcon color="secondary" icon="charm:arrow-right" />
                        </a>
                    </Container>
                </Container>

                <Container height="60%" width="50vw" align="center">
                    <PictureRectangle src={WebirdImage} />
                </Container>
            </Container> */}


            <BootstrapContainer
                className="text-center mt-5"
                id="about"
                style={{ height: "10rem", width: "100%" }}
            >
                <Row className="align-items-center justify-content-center" style={{ height: "100%" }}>
                    <Col xs={12} md={4} className="h-100 d-flex flex-column align-items-start justify-content-between mb-3">
                        <Heading>NÓS CUIDAMOS</Heading>
                        <Heading fontWeight="300">DA COMPLEXIDADE</Heading>
                        <a href='#'>
                            <img src={ArrowLargeRight} />
                        </a>
                    </Col>

                    <Col xs={12} md={4} className="d-flex flex-column align-items-start">
                        <img width={"360px"} src={ComplexityIcon} />
                        <ParagraphContainer width="100%">
                            Não se preocupe com servidores, hospedagem,
                            segurança, programação e outras coisas mais.
                            Cuidamos de tudo para que você possa se
                            concentrar no que faz de melhor!
                        </ParagraphContainer>
                    </Col>
                </Row>
            </BootstrapContainer>

            {/* ANTIGO bloco 2 */}
            {/* <Container direction="row" width="65%" height="15rem" align="center" id="services">
                <Container height="100%" width="50vw" align="center">
                    <Container height="80%" width="100%" align="flex-start" direction="column">
                        <Heading>NÓS CUIDAMOS</Heading>
                        <Heading fontWeight="300">DA COMPLEXIDADE</Heading>
                        <a href='#'>
                            <img src={ArrowLargeRight} />
                        </a>
                    </Container >
                </Container>

                <Container height="100%" width="40vw" direction="column" align="flex-start">
                    <img width={"360px"} src={ComplexityIcon} />
                    <ParagraphContainer width="30.625rem">
                        Não se preocupe com servidores, hospedagem,
                        segurança, programação e outras coisas mais.
                        Cuidamos de tudo para que você possa se
                        concentrar no que faz de melhor!
                    </ParagraphContainer>
                </Container>
            </Container> */}

            {/* terceiro "bloco" */}
            <Container align="center" width="65%" height="40rem" id="technologies">
                <Container align="center" width="50%">
                    <RectangleContainerLarge>
                        <RectanglePicture src={WebirdImageLarge} />
                    </RectangleContainerLarge>
                </Container>

                <Container
                    // style={{ backgroundColor: "red" }} 
                    width="50%" height="80%" direction="column" align="flex-start" >

                    <Container height="5%" width="auto" direction="column" align="flex-start">
                        <Heading>ABOUT</Heading>
                        <Heading fontWeight="300">HYDRA VR</Heading>
                    </Container>

                    <ParagraphContainer width="100%">
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

                    <NavButton background href='#'>ENTRE EM CONTATO</NavButton>
                </Container >
            </Container>

            <Container align="center">
                <Container height="100%" align="center" width="70vw">
                    <Container align="flex-start" height="10rem" width="90%" direction="column">
                        <Heading>WHY BUILD</Heading>
                        <Heading fontWeight="300">WITH HYDRA?</Heading>
                        <a href='#'>
                            <img src={ArrowLargeRight} />
                        </a>
                    </Container >
                </Container>

                <Container height="100%" direction="column">
                    <ParagraphContainer width="100%">
                        Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </ParagraphContainer>
                </Container>
            </Container>

            {/* bloco de cards */}
            <Container direction="row" height="" width="75vw" id="portfolio">
                <GradientCard imgSrc={CardVR} title="TECHNOLOGY" text="Vitae sapien pellentesque habitant morbi
                                                                   nunc." />
                <GradientCard imgSrc={CardEducation} title="EDUCATION" text="Vitae sapien pellentesque habitant morbi
                                                                   nunc." />
                <GradientCard imgSrc={CardTravel} title="TRAVEL" text="Vitae sapien pellentesque habitant morbi
                                                                   nunc." />
                <GradientCard imgSrc={CardSocial} title="SOCIAL" text="Vitae sapien pellentesque habitant morbi
                                                                   nunc." />
            </Container>
        </MainContainer>
    </>
}