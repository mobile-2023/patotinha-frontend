import { Container, InputGroup } from "./styles";

import { Input, InputField, Button, ButtonText } from "@gluestack-ui/themed";

type Props = {};

const SignUp = (props: Props) => {
  return (
    <Container>
      <InputGroup>
        <Input variant="outline" size="md">
          <InputField placeholder="Email" />
        </Input>

        <Input variant="outline" size="md">
          <InputField placeholder="Confirme seu email" />
        </Input>
        <Input variant="outline" size="md">
          <InputField placeholder="Nome de usuário" />
        </Input>

        <Input variant="outline" size="md">
          <InputField placeholder="Senha" />
        </Input>
        <Input variant="outline" size="md">
          <InputField placeholder="Confirme sua senha" />
        </Input>
        <Button
          size="md"
          width={"60%"}
          margin={10}
          bgColor="#000"
          action="primary"
        >
          <ButtonText>Enviar</ButtonText>
        </Button>
      </InputGroup>
    </Container>
  );
};

export default SignUp;
