import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../../routes'

import {
    Container,
    Title,
    InputGroup
} from './styles'

import { Input, InputField, Button, ButtonText } from "@gluestack-ui/themed"

type Props = {}

const SignIn = (props: Props) => {

    const navigation = useNavigation<StackTypes>()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Container>
            <Title>Sign In</Title>
            <InputGroup>
                <Input
                    variant='outline'
                    size='md'
                >
                    <InputField placeholder='Email' />
                </Input>
                <Input
                    variant='outline'
                    size='md'
                >
                    <InputField placeholder='Senha' />
                </Input>
            </InputGroup>
            <Button
                size='md'
                width={'60%'}
                margin={10}
                bgColor='#000'
                action="primary"
                onPress={() => navigation.navigate('Login')}
            >
                <ButtonText>Login</ButtonText>
            </Button>
        </Container>
    )
}

export default SignIn