import React, { useState, useEffect } from "react";
import { Container as BootstrapContainer, Carousel } from "react-bootstrap";

import GradientCard from "../GradientCard"; // Assuming you have a GradientCard component

import CardVR from "../../assets/card_VR.jpg"
import CardEducation from "../../assets/card_education.jpg"
import CardTravel from "../../assets/card_travel.jpg"
import CardSocial from "../../assets/card_social.jpg"

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
        { imgSrc: CardVR, title: "TECHNOLOGY", text: "Vitae sapien pellentesque habitant morbi nunc." },
        { imgSrc: CardEducation, title: "EDUCATION", text: "Vitae sapien pellentesque habitant morbi nunc." },
        { imgSrc: CardTravel, title: "TRAVEL", text: "Vitae sapien pellentesque habitant morbi nunc." },
        { imgSrc: CardSocial, title: "SOCIAL", text: "Vitae sapien pellentesque habitant morbi nunc." }
    ];

    return (
        <BootstrapContainer
            className="d-flex text-center align-items-center justify-content-center"
            id="portfolio"
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
                <BootstrapContainer className="w-75 d-flex flex-row justify-content-around">
                    {cards.map((card, index) => (
                        <GradientCard key={index} imgSrc={card.imgSrc} title={card.title} text={card.text} />
                    ))}
                </BootstrapContainer>
            )}
        </BootstrapContainer>
    );
}

export default ResponsiveCards;
