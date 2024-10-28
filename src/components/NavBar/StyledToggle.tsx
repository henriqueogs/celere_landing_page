import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';

const StyledToggle = styled(Navbar.Toggle)`
    border: none;
    outline: none;

    &::before,
    &::after,
    span {
        background-color: ${({ theme }) => theme.colors.text};
        border-radius: 5px;
    }

    &:focus {
        box-shadow: none;
    }
`;

export default StyledToggle;