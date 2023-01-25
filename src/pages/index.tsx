import {
  Container,
  Title,
  SubTitle,
  DahliaColor,
  TextWrapper,
  Button,
  StyledInput,
  Wrapper,
  Footer,
} from "../styles/views/index";
import React, { useState } from "react";
import getRandomTheme from "services/themes/get/getThemes";

const Home: React.FC = () => {
  const [theme, setTheme] = useState<string>("");

  const handleButtonClick = async (e: any) => {
    const theme = await getRandomTheme();

    setTheme(theme);
  };

  return (
    <Container>
      <Wrapper>
        <TextWrapper>
          <Title>
            competi<DahliaColor>DAILY</DahliaColor>
          </Title>
          <SubTitle>
            <DahliaColor>pequenos</DahliaColor> desafios pra{" "}
            <DahliaColor>estimular</DahliaColor> a criatividade da sua equipe!
          </SubTitle>
        </TextWrapper>
      </Wrapper>

      <Wrapper>
        <Button onClick={handleButtonClick}>Sortear tema</Button>
        <StyledInput readOnly placeholder="Sorteie um tema..." value={theme} />
      </Wrapper>

      <Wrapper>
        <Footer>
          <small>BETA TEST</small>
        </Footer>
      </Wrapper>
    </Container>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default Home;
