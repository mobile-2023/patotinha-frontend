import { api } from './api'
import {
    ISignIn,
    ISignUp
} from '../interface'

export const handleSignIn = async (body: ISignIn) => {
    try {
        const response = await api.post('user/login', body);
        return response;
    } catch (error) {
        console.error('Error in handleSignIn:', error);
        throw error;
    }
}

export const handleSingUp = async (body: ISignUp) => {
    const response = await api.post('user/', body);
    return response;
}

export const getAllUsers = async () => {
    const response = await api.get('user/')
    const users = JSON.stringify(response.data)
    console.log(users)
    return response
}