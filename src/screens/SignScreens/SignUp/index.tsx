import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../../routes';

import {
  Container,
  BackArrowArea,
  Touch
} from '../../../global/styles'

import {
  TitleArea,
  Title,
  SubTitle,
} from '../styles'

import { InputGroup } from "./styles";

import { Input, InputField, Button, ButtonText } from "@gluestack-ui/themed";

import { AntDesign } from '@expo/vector-icons';

type Props = {};

const SignUp = (props: Props) => {

  const navigation = useNavigation<StackTypes>()

  return (
    <Container>

      <BackArrowArea>
        <Touch onPress={() => navigation.navigate('Login')}><AntDesign name="arrowleft" size={40} color="black" /></Touch>
      </BackArrowArea>

      <TitleArea>
        <Title>Sign In</Title>
        <SubTitle>Por favor faça login para continuar.</SubTitle>
      </TitleArea>

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
      </InputGroup>
      <Button
        size="md"
        width={"75%"}
        margin={10}
        bgColor="#000"
        action="primary"
      >
        <ButtonText>Enviar</ButtonText>
      </Button>
    </Container>
  );
};

export default SignUp;
