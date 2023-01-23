import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.lupino};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`

const Title = styled.h1`
  font-size: 6rem;
  color: ${({ theme }) => theme.colors.jasmin};
  margin: 30px 0 0 0;
  padding: 0;
  font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji
`

const SubTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.jasmin};
  font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji
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
  margin: 50px 0;
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`

const SecondaryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.dahlia};
  color: ${({ theme }) => theme.colors.jasmin};
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 5px;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 50px 0;
`

const StyledInput = styled.input`
  background: white;
  color: darkgray;
  width: 50%;
  min-height: 50px;
  border: none;
  border-radius: 5px;
  padding: 10px;

  &:focus {
    outline: none;
}
`;


export { Container, Title,SubTitle, DahliaColor, TextWrapper, Button, StyledInput, SecondaryButton, ButtonWrapper };
