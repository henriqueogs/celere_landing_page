import styled from "styled-components";

const RectangleContainer = styled.div`
    width: 20rem;
    height: 17.38rem;
    border: ${({ theme }) => `1rem solid ${theme.colors.border}`};
    border-radius: 6rem 6rem 6rem 16rem;
    overflow: hidden;
`

const RectangleContainerLarge = styled(RectangleContainer)`
    height: 27.85rem;
    border-radius: 6rem 16rem 6rem 16rem;
`;

const RectanglePicture = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export { RectangleContainer, RectangleContainerLarge, RectanglePicture }