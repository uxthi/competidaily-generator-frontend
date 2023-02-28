import {
  Container,
  Title,
  SubTitle,
  JadeText,
  StyledInput,
  Wrapper,
  ButtonWrapper,
} from "../styles/views/index";
import React, { useState } from "react";
import getRandomTheme from "services/themes/get/getThemes";
import Spinner from "components/Spinner";
import Button from "components/Button/Primary";
import { useRouter } from "next/router";

const Home: React.FC = () => {
  const [theme, setTheme] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleButtonClick = async () => {
    setIsLoading(true);
    const theme = await getRandomTheme();

    setTheme(theme);
    setIsLoading(false);
  };

  const goToNewTheme = () => {
    router.push("/new-theme");
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

      <ButtonWrapper>
        <Button isLoading={isLoading} onClick={handleButtonClick}>
          Sortear tema
        </Button>
        <Button color="secondary" onClick={goToNewTheme}>
          Sugerir tema
        </Button>
      </ButtonWrapper>
      <StyledInput readOnly placeholder="Sorteie um tema..." value={theme} />
    </Container>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default Home;
