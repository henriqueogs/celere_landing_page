import styled from 'styled-components';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 5%; 
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export default Body;