import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../../routes'

import {
  Container,
  Img,
  Title,
  ButtonGroup
} from './styles'

import { Input, InputField, Button, ButtonText } from "@gluestack-ui/themed"

const Login = () => {

  const navigation = useNavigation<StackTypes>()

  return (
    <Container>
      <Img source={require('../../../assets/logo.png')} />
      <Title>My Game List</Title>
      <ButtonGroup>
        <Button
          size='md'
          width={'75%'}
          margin={10}
          bgColor='#000'
          action="primary"
          onPress={() => navigation.navigate('SignIn')}
        >
          <ButtonText>Login</ButtonText>
        </Button>
        <Button
          size='md'
          width={'75%'}
          bgColor='#000'
          action="primary"
          onPress={() => navigation.navigate('SignUp')}
        >
          <ButtonText>Cadastre-se</ButtonText>
        </Button>
      </ButtonGroup>
    </Container>
  )
}

export default Login