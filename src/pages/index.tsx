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
import getRandomTheme from "services/themes/get/getThemes";

const Home: React.FC = () => {
  const [theme, setTheme] = useState<string>("Sorteie um tema!");

  const handleButtonClick = async (e: any) => {
    const theme = await getRandomTheme();

    setTheme(theme);
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
