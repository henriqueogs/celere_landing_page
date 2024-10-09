import styled from 'styled-components';

interface MainContainerProps {
    height?: string; // Optional prop to define height
}

const MainContainer = styled.div<MainContainerProps>`
  // altura passada por parâmetro
  height: ${({ height }) => height || 'auto'};
`;

export default MainContainer;