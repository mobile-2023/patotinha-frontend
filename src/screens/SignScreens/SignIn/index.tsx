import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../../routes'
import { handleSignIn } from '../../../service/userService'
import { useAppDiscpatch } from '../../../redux/store'
import { authRequisition } from '../../../redux/authSlice'
import { ActivityIndicator } from 'react-native'

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
    const dispatch = useAppDiscpatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const signIn = async () => {
        setIsLoading(true)
        if (email === '') {
            return alert('Informe um email')
        }
        if (password === '') {
            return alert('Informe uma senha')
        }

        try {
            const response = await handleSignIn({ email, password });
            dispatch(authRequisition({userId: response.data.userId}))
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false)
    }

    return (
        <Container>
            {
                isLoading
                    ?
                    <ActivityIndicator size={"large"} color={"#000000"} />
                    :
                    <>
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
                                <InputField placeholder='Email' onChangeText={setEmail} />
                            </Input>
                            <Input
                                variant='outline'
                                size='md'
                            >
                                <InputField placeholder='Senha' onChangeText={setPassword} />
                            </Input>
                        </InputGroup>
                        <Button
                            size='md'
                            width={'75%'}
                            margin={10}
                            bgColor='#000'
                            action="primary"
                            onPress={() => signIn()}
                        >
                            <ButtonText>Login</ButtonText>
                        </Button>
                    </>
            }
        </Container>
    )
}

export default SignIn