import styled from 'styled-components';

const Container = styled.form`
  background-color: ${({ theme }) => theme.colors.jasmin};
  height: 50vh;
  border-radius: 5px;
  padding: 30px;

  @media (max-width: 414px) {
    outline: 1px solid pink;
    width: 90%;
  }

  @media (max-width: 375px) {
    outline: 1px solid pink;
    height: 60vh;
  }
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const ButtonWrapper = styled.div`
  display: flex;
  width: 50%;
  padding: 10px;
  gap: 15px;

  @media (max-width: 414px) {
    width: 100%;
  }
`

const Label = styled.label`
  color: ${({ theme }) => theme.colors.caralluma};
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  font-weight: bold;
`

const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.caralluma};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.caralluma};
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.jasmin};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.lupino};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), 0px 0px 2px ${({ theme }) => theme.colors.caralluma};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.caralluma};
  }
`;

const TextArea = styled.textarea`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.caralluma};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.caralluma};
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.jasmin};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  height: 150px;
  line-height: 1.5;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.lupino};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), 0px 0px 2px ${({ theme }) => theme.colors.caralluma};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.caralluma};
  }
`;

export  { Container, InputWrapper, Label, Input, TextArea, ButtonWrapper };