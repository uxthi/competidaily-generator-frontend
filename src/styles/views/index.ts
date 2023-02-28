import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lupino};
`;

const Title = styled.h1`
  font-size: 6rem;
  color: ${({ theme }) => theme.colors.jasmin};
  font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;

  @media (max-width: 768px) {
    font-size: 5rem;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }

  @media (max-width: 320px) {
    font-size: 2rem;
  }
`

const SubTitle = styled.h2`
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

const JadeText = styled.span`
  color: ${({ theme }) => theme.colors.jade};
`

const StyledInput = styled.textarea`
  background: white;
  color: ${({ theme }) => theme.colors.caralluma};
  width: fit-content;
  min-width: 50%;
  min-height: 50px;
  height: 15vh;
  border: none;
  border-radius: 5px;
  padding: 15px;
  font-size: 1.3rem;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    height: 20vh;
  }

  @media (max-width: 480px) {
    height: 30vh;
  }

  @media (max-width: 320px) {
    height: 30vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
  height: 50vh;

  :last-child {
    justify-content: flex-start;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  gap: 20px;
  height: 10vh;
`

export { Wrapper, Container, Title, SubTitle, JadeText, StyledInput, ButtonWrapper };
