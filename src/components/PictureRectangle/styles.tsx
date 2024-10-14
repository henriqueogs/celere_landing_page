import styled from "styled-components";

const RectangleContainer = styled.div`
    margin-top: -4rem;
    width: 30.625rem;
    height: 26.625rem;
    border: ${({ theme }) => `1rem solid ${theme.colors.border}`};
    border-radius: 6rem 6rem 6rem 16rem;
    overflow: hidden;
`

const RectanglePicture = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export { RectangleContainer, RectanglePicture }