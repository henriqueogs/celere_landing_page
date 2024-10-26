import styled from 'styled-components';

interface MainContainerProps {
  height?: string; // Optional prop to define height
}

const MainContainer = styled.div<MainContainerProps>`
  // altura passada por parâmetro
  height: ${({ height }) => height || 'auto'};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

export default MainContainer;