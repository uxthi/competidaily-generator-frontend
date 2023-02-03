import {
  Container,
  Title,
  SubTitle,
  JadeText,
  StyledInput,
  Wrapper,
} from "../styles/views/index";
import React, { useState } from "react";
import getRandomTheme from "services/themes/get/getThemes";
import Spinner from "components/Spinner";
import Button from "components/Button/Primary";

const Home: React.FC = () => {
  const [theme, setTheme] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleButtonClick = async () => {
    setIsLoading(true);
    const theme = await getRandomTheme();

    setTheme(theme);
    setIsLoading(false);
  };

  return (
    <Container>
      <Wrapper>
        <Title>
          competi<JadeText>DAILY</JadeText>
        </Title>
        <SubTitle>
          <JadeText>pequenos</JadeText> desafios pra{" "}
          <JadeText>estimular</JadeText> a criatividade da sua equipe!
        </SubTitle>
      </Wrapper>

      <Wrapper>
        {isLoading ? (
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
