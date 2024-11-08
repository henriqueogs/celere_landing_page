import styled from "styled-components";

import { Icon } from "@iconify/react";

interface ContainerProps {
    height?: string
    width?: string
    direction?: string
    align?: string
}

interface ParagraphContainerProps {
    width?: string
}

interface StyledIconProps {
    color: string;
}

const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    justify-content: space-around;
    align-items: ${({ align }) => align ?? ''};
    height: ${({ height }) => height ?? '15rem'};
    width: ${({ width }) => width ?? '70vw'};
`

const HeadingContainer = styled.div`
    text-align: left;
`

const ParagraphContainer = styled.div<ParagraphContainerProps>`
    width: ${({ width }) => width ?? '25rem'};
    font-weight: normal;
    font-size: 0.9rem;
    line-height: 1.5rem;
    text-align: left;
`

const StyledIcon = styled(Icon) <StyledIconProps>`
    color: ${({ theme, color }) => theme.colors[color]};
    font-size: 4rem;

    transition: color 0.2s ease-in-out, margin-right 0.2s ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.colors.text};
        margin-right: -2rem;
    }
`

export { Container, HeadingContainer, ParagraphContainer, StyledIcon }