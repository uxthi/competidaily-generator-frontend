import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.jade};
  color: ${({ theme }) => theme.colors.jasmin};
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 5px;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 500ms ease-in-out, width 200ms ease-in-out, height 200ms ease-in-out, transform 200ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dahlia};
  }

  @media (max-width: 320px) {
    font-size: 1.2rem;
    width: 180px;
    height: 50px;
  }
`

export default StyledButton;