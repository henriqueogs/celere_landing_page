import ColoredHeading from "../../components/ColoredHeading"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer/index.tsx"

import WebirdImage from "../../assets/webird_1.gif"
import WebirdImageLarge from "../../assets/webird_2.gif"
import ComplexityIcon from "../../assets/complexity_icon.png"
import ArrowLargeRight from "../../assets/arrow_large_right.svg"
import ComputerScreen from "../../assets/computer_screen.gif"
import VideoMeeting from "../../assets/video_meeting.gif"

import { NavButton } from "../../components/NavBar/styles.tsx"
import { AnimatedIcon, AnimatedRow, AreaRow, Container, HeadingContainer, ParagraphContainer } from "./styles.tsx"

import { Container as BootstrapContainer, Row, Col } from "react-bootstrap";

import PictureRectangle from "../../components/PictureRectangle/index.tsx"
import { Heading } from "../../components/ColoredHeading/styles.tsx"

import ResponsiveCards from "../../components/ResponsiveCards/index.tsx"

import { useInView } from "react-intersection-observer";

export default function LandingPage() {
    const { ref: servicesRef, inView: servicesInView } = useInView({
        threshold: 0.1,
    })

    const { ref: technologiesRef, inView: technologiesInView } = useInView({
        threshold: 0.1,
    })

    return <>
        <NavBar />
        <BootstrapContainer
            className="h-100 d-flex flex-column align-items-center justify-content-between mt-5"
        >
            <AreaRow id="about" className="align-items-center justify-content-around">
                <Col xs={12} md={4} sm={6} className="h-100 w-sm-100 d-flex flex-column align-items-start justify-content-center gap-4 mb-2">
                    <HeadingContainer>
                        <ColoredHeading gradient>Olá, </ColoredHeading>
                        <ColoredHeading> somos a </ColoredHeading>
                        <ColoredHeading gradient>CÉLERE</ColoredHeading>
                    </HeadingContainer>

                    <ParagraphContainer width="80%">
                        Criamos software de ponta para impulsionar seu crescimento.
                        Com tecnologia avançada e especialistas em programação,
                        oferecemos soluções personalizadas para seu negócio.
                        Transforme sua experiência digital.
                    </ParagraphContainer>

                    <Container height="auto" align="center" width="20rem">
                        <NavButton background href="#">Conheça já</NavButton>&nbsp;
                    </Container>
                </Col>

                <Col xs={12} md={4} sm={6} className="h-50 d-flex justify-content-center my-3" >
                    <PictureRectangle src={WebirdImage} />
                </Col>
            </AreaRow>

            <AreaRow ref={servicesRef} id="services" className="align-items-center justify-content-around mt-5">
                <Col xs={12} md={4} sm={6} className={
                    `h-100 gap-2 d-flex flex-column align-items-start justify-content-center 

                    ${servicesInView
                        ? "animate__animated animate__fadeInLeft"
                        :
                        "animate__animated animate__fadeOutLeft"
                    }
                    `}
                >
                    <Heading>NÓS CUIDAMOS</Heading>
                    <Heading fontWeight="300">DA COMPLEXIDADE</Heading>
                    <a href='#'>
                        <img src={ArrowLargeRight} />
                    </a>
                </Col>

                <Col xs={12} md={4} sm={6} className={`d-flex flex-column align-items-center 
                
                        ${servicesInView ?
                        "animate__animated animate__fadeInRight"
                        :
                        ""}`} >

                    <AnimatedIcon className={servicesInView ? "animate__animated animate__bounce" : ""} src={ComplexityIcon} />

                    <ParagraphContainer width="100%">
                        Não se preocupe com servidores, hospedagem,
                        segurança, programação e outras coisas mais.
                        Cuidamos de tudo para que você possa se
                        concentrar no que faz de melhor!
                    </ParagraphContainer>
                </Col>
            </AreaRow>

            <AnimatedRow
                ref={technologiesRef}
                id="technologies"
                className={`d-flex align-items-center justify-content-around my-5 
                    ${technologiesInView ? "animate__animated animate__zoomIn" : ""}`}
                inView={technologiesInView}
            >
                <Col xs={12} md={4} sm={6} className="h-100 d-flex flex-column justify-content-center align-items-center">
                    <PictureRectangle src={WebirdImageLarge} />
                </Col>

                <Col
                    xs={12} md={4} sm={6} className="h-100 gap-4 d-flex flex-column justify-content-center align-items-start mb-2">

                    <div>
                        <img src={ComputerScreen} width="100px" />
                        <Col className="d-inline-flex flex-grow-0 flex-column align-items-start justify-content-center">
                            <Heading>VOCÊ CONECTADO</Heading>
                            <Heading fontWeight="300">COM O MUNDO</Heading>
                        </Col>
                    </div>
                    <ParagraphContainer width="100%">
                        Trabalhamos com frameworks robustos de front-end e back-end
                        e soluções em nuvem que garantem segurança e alta performance para o seu projeto.
                        Tecnologias e ferramentas de última
                        geração para criar soluções digitais que
                        conectam você ao mundo.
                    </ParagraphContainer>

                    <NavButton background href='#'>ENTRE EM CONTATO</NavButton>
                </Col >
            </AnimatedRow>

            <Row id="team" className="d-flex align-items-center justify-content-center mt-5">
                <Col xs={12} md={4} sm={12} className="h-100 d-flex flex-column justify-content-center align-items-start ms-5">
                    <img src={VideoMeeting} width="120px" />
                    <Heading>CONHEÇA</Heading>
                    <Heading fontWeight="300">NOSSO TIME</Heading>
                    <a href='#'>
                        <img src={ArrowLargeRight} />
                    </a>
                </Col >

                <Col xs={12} md={4} sm={12} className="h-100 d-flex flex-column justify-content-center">
                    <ParagraphContainer width="100%">
                        Somos profissionais apaixonados por tecnologia e inovação, com expertise em diferentes áreas para oferecer soluções completas e personalizadas. Estamos prontos para transformar desafios em resultados de alto impacto.
                        <br /><b>Conheça as pessoas que fazem da nossa Software House um lugar onde o talento e a tecnologia andam juntos:</b>
                    </ParagraphContainer>
                </Col>
            </Row>

            <Row style={{ alignSelf: "center", width: "100%", height: "70vh" }} className="d-flex align-items-center justify-content-center mt-5">
                <ResponsiveCards />
            </Row>

            <Footer />
        </BootstrapContainer>
    </>
}