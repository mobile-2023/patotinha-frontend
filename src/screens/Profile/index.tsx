import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../routes'
import { authRequisition } from '../../redux/authSlice'
import { useAppDiscpatch } from '../../redux/store'

import {
    
} from '../../global/styles'

import {
    InputGroup,
    ButtonArea,
    Title,
    Descripition,
    Container,
} from './styles'

import { Input, InputField, Button, ButtonText } from "@gluestack-ui/themed"

import { AntDesign } from '@expo/vector-icons';

type Props = {}

const SignIn = (props: Props) => {

    const navigation = useNavigation<StackTypes>()
    const dispatch = useAppDiscpatch()
    const [username, setUsername] = useState('Pegar name do BD')
    const [email, setEmail] = useState('Pegar email do BD')

    const updateUser = async () => {
        //put do BD
    }

    const deleteUser = async () => {
        //delete do BD
    }

    const logout = async () => {
        dispatch(authRequisition({userId: ''}))
    }

    return (
        <Container>
            <Title>Your Account</Title>
            <InputGroup>
                <Descripition>Username</Descripition>
                <Input
                    variant='outline'
                    size='md'
                >
                    <InputField placeholder={username} onChangeText={setUsername}/>
                </Input>
            </InputGroup>
            <InputGroup>
                <Descripition>Username</Descripition>
                <Input
                    variant='outline'
                    size='md'
                >
                    <InputField placeholder={email} onChangeText={setEmail}/>
                </Input>
            </InputGroup>
            
                <ButtonArea>
                    <Button
                        size='md'
                        width={'75%'}
                        bgColor='#000'
                        action="primary"
                        onPress={() => updateUser()}
                    >
                        <ButtonText>Atualizar</ButtonText>
                    </Button>
                    <Button
                        size='md'
                        width={'75%'}
                        bgColor='red'
                        action="primary"
                        onPress={() => deleteUser()}
                    >
                        <ButtonText>Deletar Conta</ButtonText>
                    </Button>
                    <Button
                        size='md'
                        width={'75%'}
                        bgColor='red'
                        action="primary"
                        onPress={() => logout()}
                    >
                        <ButtonText>Sair da Conta</ButtonText>
                    </Button>
                </ButtonArea>
            
        </Container>
    )
}

export default SignIn