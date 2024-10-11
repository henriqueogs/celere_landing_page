import styled from "styled-components";

interface ContainerProps {
    height?: string
}

const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: ${({ height }) => height}
`

const HeadingContainer = styled.div`
    width: 28rem;
`

const ParagraphContainer = styled.div`
    width: 25rem;
    font-weight: normal;
    font-size: 0.9rem;
    line-height: 1.5rem;
`

export { Container, HeadingContainer, ParagraphContainer }