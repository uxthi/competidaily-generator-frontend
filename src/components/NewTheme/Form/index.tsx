import Button from "components/Button/Primary";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import sendMail from "services/emailJs";
import {
  Container,
  InputWrapper,
  Label,
  Input,
  TextArea,
  ButtonWrapper,
} from "./styles";

type FormValues = {
  name: string;
  theme: string;
};

const Form = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    theme: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const form = useRef();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await sendMail(form.current);
      if (response === "success") {
        console.log("Success!");
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Error >>>>", error);
      setIsLoading(false);
    }
  };

  const router = useRouter();

  const goToHome = () => {
    setIsLoading(false);
    router.push("/");
  };

  const isSubmitDisabled = formValues.theme === "";

  return (
    <Container ref={form} onSubmit={handleSubmit}>
      <InputWrapper>
        <Label htmlFor="name-input">Qual é o seu nome?</Label>
        <Input
          id="name-input"
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="theme-input">Qual tema você quer sugerir? *</Label>
        <TextArea
          id="theme-input"
          name="theme"
          value={formValues.theme}
          onChange={handleInputChange}
          required
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button isLoading={isLoading} type="submit" disabled={isSubmitDisabled}>
          Enviar!
        </Button>
        <Button color="secondary" onClick={goToHome}>
          Voltar
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default Form;
