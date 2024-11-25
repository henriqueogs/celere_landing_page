import ColoredHeading from "../../components/ColoredHeading"
import NavBar from "../../components/NavBar"

import WebirdImage from "../../assets/webird_1.jpg"
import WebirdImageLarge from "../../assets/webird_2.jpg"
import ComplexityIcon from "../../assets/complexity_icon.png"
import ArrowLargeRight from "../../assets/arrow_large_right.svg"
import ComputerScreen from "../../assets/computer_screen.gif"
import VideoMeeting from "../../assets/video_meeting.gif"

import { NavButton } from "../../components/NavBar/styles.tsx"
import { Container, HeadingContainer, ParagraphContainer } from "./styles.tsx"

import { Container as BootstrapContainer, Row, Col } from "react-bootstrap";

import PictureRectangle from "../../components/PictureRectangle/index.tsx"
import { Heading } from "../../components/ColoredHeading/styles.tsx"

import ResponsiveCards from "../../components/ResponsiveCards/index.tsx"

export default function LandingPage() {
    return <>
        <NavBar />
        <BootstrapContainer
            className="h-100 d-flex flex-column justify-content-between mt-5"
        >
            <Row id="about" className="align-items-center justify-content-center">
                <Col xs={12} md={4} sm={6} className="h-100 w-sm-100 d-flex flex-column align-items-start justify-content-between gap-4 mb-2">
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
                    </Container>
                </Col>

                <Col xs={12} md={4} sm={6} className="d-flex justify-content-center my-3" >
                    <PictureRectangle src={WebirdImage} />
                </Col>
            </Row>

            <Row id="services" className="align-items-center justify-content-center mt-5">
                <Col xs={12} md={4} sm={6} className="h-100 gap-2 d-flex flex-column align-items-start justify-content-between">
                    <Heading>NÓS CUIDAMOS</Heading>
                    <Heading fontWeight="300">DA COMPLEXIDADE</Heading>
                    <a href='#'>
                        <img src={ArrowLargeRight} />
                    </a>
                </Col>

                <Col xs={12} md={4} sm={6} className="d-flex flex-column align-items-center">
                    <img width={"310px"} src={ComplexityIcon} />
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
                <Col xs={12} md={4} sm={6} className="h-100 d-flex flex-column justify-content-start align-items-center">
                    <PictureRectangle src={WebirdImageLarge} />
                </Col>

                <Col
                    xs={12} md={4} sm={6} className="h-100 gap-4 d-flex flex-column justify-content-around align-items-start mb-2">

                    <div>
                        <img src={ComputerScreen} width="100px" />
                        <Col className="d-inline-flex flex-grow-0 flex-column align-items-start justify-content-center">
                            <Heading>VOCÊ CONECTADO</Heading>
                            <Heading fontWeight="300">COM O MUNDO</Heading>
                        </Col>
                    </div>
                    <ParagraphContainer width="100%">
                        Utilizamos tecnologias inovadoras e ferramentas de última
                        geração para transformar ideias em soluções digitais que
                        conectam você ao mundo. Trabalhamos com tecnologias modernas e escaláveis,
                        desde frameworks robustos de front-end e back-end, até soluções em nuvem
                        que garantem segurança e alta performance para o seu projeto.
                    </ParagraphContainer>

                    <NavButton background href='#'>ENTRE EM CONTATO</NavButton>
                </Col >
            </Row>

            <Row className="d-flex align-items-center justify-content-center mt-5">
                <Col xs={12} md={4} sm={12} className="h-100 d-flex flex-column align-items-start ms-5">
                    <img src={VideoMeeting} width="120px" />
                    <Heading>CONHEÇA</Heading>
                    <Heading fontWeight="300">NOSSO TIME</Heading>
                    <a href='#'>
                        <img src={ArrowLargeRight} />
                    </a>
                </Col >

                <Col xs={12} md={4} sm={12} className="h-100 d-flex flex-column">
                    <ParagraphContainer width="100%">
                        Somos profissionais apaixonados por tecnologia e inovação, com expertise em diferentes áreas para oferecer soluções completas e personalizadas. Estamos prontos para transformar desafios em resultados de alto impacto.
                        <br /><b>Conheça as pessoas que fazem da nossa Software House um lugar onde o talento e a tecnologia andam juntos:</b>
                    </ParagraphContainer>
                </Col>
            </Row>

            <Row style={{ alignSelf: "center", width: "100%", height: "60vh" }} className="d-flex align-items-center justify-content-center mt-5">
                <ResponsiveCards />
            </Row>
        </BootstrapContainer>
    </>
}