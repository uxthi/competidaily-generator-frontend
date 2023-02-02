import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.dahlia};
  color: ${({ theme }) => theme.colors.jasmin};
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 5px;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: linear-gradient(90deg, rgba(255,74,74,1) 35%, rgba(255,102,102,1) 100%);
  }

  @media (max-width: 320px) {
    font-size: 1.2rem;
    width: 180px;
    height: 50px;
  }
`

export default StyledButton;