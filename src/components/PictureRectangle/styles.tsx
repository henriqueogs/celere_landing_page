import styled, { keyframes } from "styled-components";

interface RectangleContainerProps {
    isVisible?: boolean;
}

const fadeInFwd = keyframes`
  0% {
    transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
`;

const fadeOutFwd = keyframes`
  0% {
    transform: translateZ(0);
    opacity: 1;
  }
  100% {
    transform: translateZ(-80px);
    opacity: 0;
  }
`;

const RectangleContainer = styled.div<RectangleContainerProps>`
    max-width: 30rem;
    min-height: 17.38rem;
    border: ${({ theme }) => `1rem solid ${theme.colors.border}`};
    border-radius: 6rem 6rem 6rem 16rem;
    overflow: hidden;
    animation: ${({ isVisible }) => (isVisible ? fadeInFwd : fadeOutFwd)} 0.6s
    cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`;

const RectangleContainerLarge = styled(RectangleContainer)`
    height: 27.85rem;
    border-radius: 6rem 16rem 6rem 16rem;
`;

const RectanglePicture = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export { RectangleContainer, RectangleContainerLarge, RectanglePicture };
