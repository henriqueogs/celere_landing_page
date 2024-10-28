import styled from 'styled-components';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 5%; 
  height: auto;
  background-color: ${({ theme }) => theme.colors.background};
`;

export default Body;