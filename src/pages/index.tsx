import {
  Container,
  Title,
  SubTitle,
  DahliaColor,
  TextWrapper,
  Button,
  StyledInput,
  ButtonWrapper,
} from "../styles/views/index";
import React, { useState } from "react";

const Home: React.FC = () => {
  const [theme, setTheme] = useState<string>("Testando tema");

  const handleButtonClick = (e: any) => {
    console.log("clicou >", e);
    setTheme("Clicou, testando tema 2");
  };

  return (
    <Container>
      <TextWrapper>
        <Title>
          competi<DahliaColor>DAILY</DahliaColor>
        </Title>
        <SubTitle>
          <DahliaColor>pequenos</DahliaColor> desafios pra{" "}
          <DahliaColor>estimular</DahliaColor> a criatividade da sua equipe!
        </SubTitle>
      </TextWrapper>
      <ButtonWrapper>
        <Button onClick={handleButtonClick}>Sortear tema</Button>
      </ButtonWrapper>
      <StyledInput readOnly value={theme} />
    </Container>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default Home;
