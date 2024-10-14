import styled from "styled-components";

interface HeadingProps {
    gradient?: boolean
    fontWeight?: string
}

const Heading = styled.h1<HeadingProps>`
    display: inline;
    margin: 0 0 1rem 0;
    font-size: 2.5rem;
    font-weight: ${({ fontWeight }) => fontWeight ?? 'bold'};
    background: ${({ gradient, theme }) => gradient
        ? `linear-gradient(to right, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`
        : theme.colors.text
    };
    background-clip: text;
    color: transparent
`

export { Heading }