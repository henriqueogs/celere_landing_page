import ColoredHeading from "../../components/ColoredHeading"
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

import { Container as BootstrapContainer, Row, Col } from "react-bootstrap";

import PictureRectangle from "../../components/PictureRectangle/index.tsx"
import { Heading } from "../../components/ColoredHeading/styles.tsx"
import { RectangleContainerLarge, RectanglePicture } from "../../components/PictureRectangle/styles.tsx"

import GradientCard from "../../components/GradientCard/index.tsx"

export default function LandingPage() {
    return <>
        <NavBar />
        <BootstrapContainer
            className="h-100 d-flex flex-column justify-content-between mt-5"
        >
            <Row id="about" className="align-items-center justify-content-center">
                <Col xs={12} md={4} sm={2} className="h-100 d-flex flex-column align-items-start justify-content-between mb-2">
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

                <Col xs={12} md={4} sm={2} className="d-flex justify-content-center" >
                    <PictureRectangle src={WebirdImage} />
                </Col>
            </Row>

            <Row id="services" className="align-items-center justify-content-center mt-5">
                <Col xs={12} md={4} sm={2} className="h-100 d-flex flex-column align-items-start justify-content-between">
                    <Heading>NÓS CUIDAMOS</Heading>
                    <Heading fontWeight="300">DA COMPLEXIDADE</Heading>
                    <a href='#'>
                        <img src={ArrowLargeRight} />
                    </a>
                </Col>

                <Col xs={12} md={4} sm={2} className="d-flex flex-column align-items-center">
                    <img width={"360px"} src={ComplexityIcon} />
                    <ParagraphContainer width="100%">
                        Não se preocupe com servidores, hospedagem,
                        segurança, programação e outras coisas mais.
                        Cuidamos de tudo para que você possa se
                        concentrar no que faz de melhor!
                    </ParagraphContainer>
                </Col>
            </Row>

            <Row id="technologies"
                className="d-flex align-items-center justify-content-center mt-5">
                <Col xs={12} md={4} sm={2} className="h-100 d-flex flex-column justify-content-center align-items-center">
                    <RectangleContainerLarge>
                        <RectanglePicture src={WebirdImageLarge} />
                    </RectangleContainerLarge>
                </Col>

                <Col
                    xs={12} md={4} sm={2} className="h-100 d-flex flex-column justify-content-around align-items-start mb-2">
                    <Col className="d-inline-flex flex-grow-0 flex-column align-items-start justify-content-center">
                        <Heading>ABOUT</Heading>
                        <Heading fontWeight="300">HYDRA VR</Heading>
                    </Col>

                    <ParagraphContainer width="100%">
                        Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus
                        urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida
                        dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in.
                        Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet
                        sed. Consequat semper viverra nam libero justo laoreet sit amet.
                    </ParagraphContainer>

                    <NavButton background href='#'>ENTRE EM CONTATO</NavButton>
                </Col >
            </Row>

            <Row className="d-flex align-items-center justify-content-center mt-5">
                <Col xs={12} md={4} sm={2} className="h-100 d-flex flex-column align-items-start">
                    <Heading>WHY BUILD</Heading>
                    <Heading fontWeight="300">WITH HYDRA?</Heading>
                    <a href='#'>
                        <img src={ArrowLargeRight} />
                    </a>
                </Col >
                <Col xs={12} md={4} sm={2} className="h-100 d-flex flex-column align-items-start">
                    <ParagraphContainer width="100%">
                        Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </ParagraphContainer>
                </Col>
            </Row>
        </BootstrapContainer>
    </>
}