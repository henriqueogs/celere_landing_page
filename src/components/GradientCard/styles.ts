import styled from "styled-components";

export const CardContainer = styled.div`
    width: 19.375rem;
    height: 31.937rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 2rem; /* round corners */
    background: radial-gradient(circle, #235983 0%, #003250 100%);
    box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1); /* optional: adds shadow for depth */
`

export const CardImageContainer = styled.div`
    width: 11.932rem;
    height: 11.932rem;
    border: ${({ theme }) => `1rem solid ${theme.colors.border}`};
    border-radius: 50%;
    overflow: hidden;
`

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
`

export const HorizontalLine = styled.div`
    height: 0.048rem;
    opacity: 0.5;
    width: 9.625rem;
    margin-bottom: 0.75rem;
    background-color: ${({ theme }) => theme.colors.line};
`