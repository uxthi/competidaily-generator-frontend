import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lupino};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Title = styled.h1`
  font-size: 6rem;
  color: ${({ theme }) => theme.colors.jasmin};
  padding: 0;
  font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;

  @media (max-width: 768px) {
    font-size: 5rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }

  @media (max-width: 320px) {
    font-size: 2rem;
  }
`

const SubTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.jasmin};
  font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 320px) {
    font-size: 1.3rem;
  }
`

const DahliaColor = styled.span`
  color: ${({ theme }) => theme.colors.dahlia};
`

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.dahlia};
  color: ${({ theme }) => theme.colors.jasmin};
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 5px;
  font-size: 1.3rem;
  font-weight: 600;


  @media (max-width: 320px) {
    font-size: 1.2rem;
    width: 180px;
    height: 50px;
  }
`

const StyledInput = styled.textarea`
  background: white;
  color: ${({ theme }) => theme.colors.caralluma};
  width: fit-content;
  min-width: 50%;
  min-height: 50px;
  height: fit-content;
  border: none;
  border-radius: 5px;
  padding: 15px;
  font-size: 1.3rem;

  &:focus {
    outline: none;
  }

  @media (max-width: 1024px) {
    height: 100px;
  }

  @media (max-width: 768px) {
    height: 100px;
  }

  @media (max-width: 480px) {
    height: 150px;
  }

  @media (max-width: 320px) {
    height: 200px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
`

export { Wrapper, Container, Title,SubTitle, DahliaColor, TextWrapper, Button, StyledInput };
