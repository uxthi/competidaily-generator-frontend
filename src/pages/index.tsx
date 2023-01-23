import {
  Container,
  Title,
  SubTitle,
  DahliaColor,
  TextWrapper,
  Button,
  StyledInput,
  SecondaryButton,
  ButtonWrapper,
} from "../styles/views/index";
import React from "react";

const Home: React.FC = () => {
  return (
    <Container>
      <TextWrapper>
        <Title>
          competi<DahliaColor>DAILY</DahliaColor>
        </Title>
        <SubTitle>
          <DahliaColor>Pequenos</DahliaColor> desafios pra{" "}
          <DahliaColor>estimular</DahliaColor> a criatividade da sua equipe!
        </SubTitle>
      </TextWrapper>
      <ButtonWrapper>
        <Button>Login</Button>
        <SecondaryButton>Sortear tema</SecondaryButton>
      </ButtonWrapper>
      <StyledInput />
    </Container>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default Home;
