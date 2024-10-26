import styled from 'styled-components';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
  padding: 5%; 
  background-color: ${({ theme }) => theme.colors.background};
`;

export default Body;