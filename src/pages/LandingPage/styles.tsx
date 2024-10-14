import styled from "styled-components";

import { Icon } from "@iconify/react";

interface ContainerProps {
    height?: string
    width?: string
    direction?: string
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
    justify-content: space-between;
    height: ${({ height }) => height};
    width: ${({ width }) => width ?? '70vw'};
    margin-bottom: 8rem;
`

const HeadingContainer = styled.div`
    width: 28rem;
`

const ParagraphContainer = styled.div<ParagraphContainerProps>`
    width: ${({ width }) => width ?? '25rem'};
    font-weight: normal;
    font-size: 0.9rem;
    line-height: 1.5rem;
`

const StyledIcon = styled(Icon) <StyledIconProps>`
    color: ${({ theme, color }) => theme.colors[color]};
    font-size: 4rem;
`

export { Container, HeadingContainer, ParagraphContainer, StyledIcon }