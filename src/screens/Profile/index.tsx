import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../routes'

import {
    
} from '../../global/styles'

import {
    InputGroup,
    ButtonArea,
    Title,
    Descripition,
    Container,
} from './styles'

import { Input, InputField, Button, ButtonText, ButtonGroup } from "@gluestack-ui/themed"

import { AntDesign } from '@expo/vector-icons';

type Props = {}

const SignIn = (props: Props) => {

    const navigation = useNavigation<StackTypes>()
    const [username, setUsername] = useState('Pegar name do BD')
    const [email, setEmail] = useState('Pegar email do BD')

    const updateUser = async () => {
        //put do BD
    }

    const deleteUser = async () => {
        //delete do BD
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
            
                <Button
                    size='md'
                    width={'75%'}
                    margin={50}
                    bgColor='#000'
                    action="primary"
                    onPress={() => updateUser()}
                >
                    <ButtonText>Atualizar</ButtonText>
                </Button>
                <Button
                    size='md'
                    width={'50%'}
                    margin={50}
                    bgColor='red'
                    action="primary"
                    onPress={() => deleteUser()}
                >
                    <ButtonText>Deletar Conta</ButtonText>
                </Button>
            
        </Container>
    )
}

export default SignIn