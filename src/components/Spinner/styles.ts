import styled from 'styled-components';

const Container = styled.div`
  width: 30px;
  height: 30px;
  margin: 10px 0;

  ::after {
    content: "";
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 6px solid ${({ theme }) => theme.colors.jasmin};
    border-color: #fff transparent #fff transparent;
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