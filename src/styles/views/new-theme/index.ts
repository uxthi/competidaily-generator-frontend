import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.lupino};
`;

const FormWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;


  @media (max-width: 820px) {
    width: 90%;
  }

  @media (max-width: 390px) {
    width: 100%;
  }
`


export { Container, FormWrapper };
