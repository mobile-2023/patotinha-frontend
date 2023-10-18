import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../../routes'

import {
    BackArrowArea,
    Container,
    Touch,
} from '../../../global/styles'

import {
    TitleArea,
    Title,
    SubTitle
} from '../styles'

import {
    InputGroup,
} from './styles'

import { Input, InputField, Button, ButtonText } from "@gluestack-ui/themed"

import { AntDesign } from '@expo/vector-icons';

type Props = {}

const SignIn = (props: Props) => {

    const navigation = useNavigation<StackTypes>()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSingIn = async () => {
        navigation.navigate('Login')
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
                <Input
                    variant='outline'
                    size='md'
                >
                    <InputField placeholder='Email' onChangeText={setEmail}/>
                </Input>
                <Input
                    variant='outline'
                    size='md'
                >
                    <InputField placeholder='Senha' onChangeText={setPassword}/>
                </Input>
            </InputGroup>
            <Button
                size='md'
                width={'75%'}
                margin={10}
                bgColor='#000'
                action="primary"
                onPress={() => handleSingIn()}
            >
                <ButtonText>Login</ButtonText>
            </Button>
        </Container>
    )
}

export default SignIn