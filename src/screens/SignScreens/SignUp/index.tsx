import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../../routes';
import { handleSingUp } from '../../../service/authService';

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

  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const singUp = async () => {
    if (email !== confirmEmail) {
      return alert('Email n ta igual');
    }
    if (password !== confirmPassword) {
      return alert('Senha n ta igual');
    }

    const response = await handleSingUp({ email, username, password })

    if (response.status === 200) {
      navigation.navigate('Login')
    } else {
      alert(`Cadastro falhou com códgio ${response.status}`)
    }
  }


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
          <InputField placeholder="Email" onChangeText={setEmail} />
        </Input>

        <Input variant="outline" size="md">
          <InputField placeholder="Confirme seu email" onChangeText={setConfirmEmail} />
        </Input>
        <Input variant="outline" size="md">
          <InputField placeholder="Nome de usuário" onChangeText={setUsername} />
        </Input>

        <Input variant="outline" size="md">
          <InputField placeholder="Senha" onChangeText={setPassword} />
        </Input>
        <Input variant="outline" size="md">
          <InputField placeholder="Confirme sua senha" onChangeText={setConfirmPassword} />
        </Input>
      </InputGroup>
      <Button
        size="md"
        width={"75%"}
        margin={10}
        bgColor="#000"
        action="primary"
      >
        <ButtonText onPress={() => singUp()}>Enviar</ButtonText>
      </Button>
    </Container>
  );
};

export default SignUp;
