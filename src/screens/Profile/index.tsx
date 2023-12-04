import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../routes'
import authSlice, { authRequisition } from '../../redux/authSlice'
import { useAppDiscpatch } from '../../redux/store'
import { handleDeleteUser,handleUpdateUser, handleUserById } from '../../service/userService'
import { Modal, View } from 'react-native';
import { useAppSelector } from '../../redux/store'
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

const Profile = (props: Props) => {

    const [isModalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation<StackTypes>()
    const dispatch = useAppDiscpatch()
    const [username, setUsername] = useState('Pegar name do BD')
    const [email, setEmail] = useState('Pegar email do BD')
    const userId = useAppSelector(state => state.auth.userId)

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const updateUser = async () => {
        const body:any = {username, email};
        handleUpdateUser(userId, body)
        toggleModal();
    }

    const deleteUser = async () => {
        handleDeleteUser(userId)
        logout()
    }

    const logout = async () => {
        dispatch(authRequisition({userId: ''}))
    }

    const getUserById =async () => {
        const user = await handleUserById(userId);
        setEmail(user.data.email)
        setUsername(user.data.username)
    }

    useEffect(() => {
            getUserById()
      }, []); 
  

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
                <Descripition>Email</Descripition>
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

                    <Modal
                    visible={isModalVisible}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={() => {
                        toggleModal();
                    }}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                            <Descripition>Conta atualizada com sucesso!</Descripition>
                            <Button
                            bgColor='#000'
                            onPress={() => toggleModal()}
                            >
                                <ButtonText>Fechar</ButtonText>
                            </Button>
                        </View>
                    </View>
                </Modal>
                
                </ButtonArea>
            
        </Container>
    )
}

export default Profile