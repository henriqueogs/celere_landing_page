import styled from "styled-components";
import { Row as BootstrapRow } from "react-bootstrap";

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

const AreaRow = styled(BootstrapRow)`
    @media (min-width: 1200px) {
        height: 90vh;
        width: 70vw;
    }
`

const ParagraphContainer = styled.div<ParagraphContainerProps>`
    width: ${({ width }) => width ?? '25rem'};
    font-weight: normal;
    font-size: 1.15rem;
    line-height: 2rem;
    text-align: left;
`

const AnimatedIcon = styled.img`
    width: 20rem;
`

const StyledIcon = styled(Icon) <StyledIconProps>`
    color: ${({ theme, color }) => theme.colors[color]};
    font-size: 4rem;

    transition: color 0.8s ease-in-out, margin-right 0.2s ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.colors.text};
        margin-right: -2rem;
    }
`

export { Container, HeadingContainer, ParagraphContainer, StyledIcon, AreaRow, AnimatedIcon }