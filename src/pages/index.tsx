import { Container } from "@/styles/views";
import React from "react";

const Home: React.FC = () => {
  return (
    <Container>
      <p>Competidaily Generator - POC</p>
    </Container>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default Home;
