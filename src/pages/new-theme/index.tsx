import Form from "components/NewTheme/Form";
import React from "react";
import { Container, FormWrapper } from "src/styles/views/new-theme";

const NewTheme: React.FC = () => {
  return (
    <Container>
      <FormWrapper>
        <Form />
      </FormWrapper>
    </Container>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default NewTheme;
