import {
  Container,
  Title,
  SubTitle,
  DahliaColor,
  Button,
  StyledInput,
  Wrapper,
} from "../styles/views/index";
import React, { useState } from "react";
import getRandomTheme from "services/themes/get/getThemes";
import Footer from "@/components/Footer";
import Spinner from "@/components/Spinner";

const Home: React.FC = () => {
  const [theme, setTheme] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleButtonClick = async (e: any) => {
    setLoading(true);
    const theme = await getRandomTheme();

    setTheme(theme);
    setLoading(false);
  };

  return (
    <Container>
      <Wrapper>
        <Title>
          competi<DahliaColor>DAILY</DahliaColor>
        </Title>
        <SubTitle>
          <DahliaColor>pequenos</DahliaColor> desafios pra{" "}
          <DahliaColor>estimular</DahliaColor> a criatividade da sua equipe!
        </SubTitle>
      </Wrapper>

      <Wrapper>
        {loading ? (
          <Spinner />
        ) : (
          <Button onClick={handleButtonClick}>Sortear tema</Button>
        )}
        <StyledInput readOnly placeholder="Sorteie um tema..." value={theme} />
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
