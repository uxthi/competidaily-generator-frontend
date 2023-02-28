import styled from 'styled-components';

const Container = styled.div`
  min-width: 200px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledButton = styled.button<{ color?: string }>`
  background-color: ${({ theme, color }) => color === 'secondary' ? theme.colors.dahlia : theme.colors.jade};
  color: ${({ theme }) => theme.colors.jasmin};
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 5px;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 320px) {
    font-size: 1.2rem;
    width: 180px;
    height: 50px;
  }
`

export {Container, StyledButton};