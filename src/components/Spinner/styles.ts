import styled from 'styled-components';

const Container = styled.div`
  width: 30px;
  height: 30px;
  margin-bottom: 10px;

  ::after {
    content: "";
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 6px solid ${({ theme }) => theme.colors.jasmin};
    border-color: ${({ theme }) => `${theme.colors.dahlia} ${theme.colors.jade} ${theme.colors.dahlia} ${theme.colors.jade}`};
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
    transform: rotate(360deg);
    }
  }

`

export  { Container };