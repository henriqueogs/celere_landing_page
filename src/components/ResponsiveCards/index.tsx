import React, { useState, useEffect } from "react";
import { Container as BootstrapContainer, Carousel } from "react-bootstrap";

import GradientCard from "../GradientCard"; // Assuming you have a GradientCard component

import Alessandro from "../../assets/alessandro.jpg";
import Henrique from "../../assets/henrique.jpg";
import Nilmer from "../../assets/nilmer.jpg";

function ResponsiveCards() {
    const [isMobile, setIsMobile] = useState(false);

    // Update state based on window width
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Change width threshold as needed
        };
        handleResize(); // Check initial screen size
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const cards = [
        { imgSrc: Alessandro, title: "ALESSANDRO", text: "Arquiteto de Soluções, Engenheiro de Software, Dev Sênior.", link: "https://www.linkedin.com/in/alessandroferreira-dev/" },
        { imgSrc: Henrique, title: "HENRIQUE", text: "Desenvolvedor Front-end Sênior, Engenheiro de Software", link: "https://www.linkedin.com/in/henriqueogs/" },
        { imgSrc: Nilmer, title: "GIOVANE", text: "Desenvolvedor Front-end Web e Mobile | programei essa página! :D", link: "https://www.linkedin.com/in/nilmer/" },
    ];

    return (
        <BootstrapContainer
            className="d-flex text-center align-items-center justify-content-center"
            id="team"
            style={{ height: "100%", width: "100%" }}
        >
            {isMobile ? (
                <Carousel style={{ height: "105%", width: "150%" }} className="d-flex justify-content-center align-items-center">
                    {cards.map((card, index) => (
                        <Carousel.Item key={index}>
                            <div className="d-flex justify-content-center">
                                <GradientCard imgSrc={card.imgSrc} title={card.title} text={card.text} />
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            ) : (
                <BootstrapContainer className="w-75 d-flex flex-row justify-content-center">
                    {cards.map((card, index) => (
                        <GradientCard key={index} imgSrc={card.imgSrc} title={card.title} text={card.text} />
                    ))}
                </BootstrapContainer>
            )}
        </BootstrapContainer>
    );
}

export default ResponsiveCards;
