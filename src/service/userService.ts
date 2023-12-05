import { api } from './api'
import {
    ISignIn,
    ISignUp,
    IUpdate
} from '../interface'

export const handleSignIn = async (body: ISignIn) => {
    try {
        const response = await api.post('user/login', body);
        return response;
    } catch (error) {
        throw error
    }
}

export const handleSingUp = async (body: ISignUp) => {
    try {
        const response = await api.post('user/', body);
        return response;
    } catch (error) {
        throw error
    }
}

export const getAllUsers = async () => {
    const response = await api.get('user/')
    const users = JSON.stringify(response.data)
    console.log(users)
    return response
}

export const handleUpdateUser = async (id: string, body: IUpdate) => {
    const response = await api.put(`/user/${id}`, body)
    console.log(response)
    return response
}

export const handleDeleteUser = async (id: string) => {
    const response = await api.delete(`/user/${id}`)
    console.log(response)
    return response
}

export const handleUserById = async (id: string) => {
    const response = await api.get(`/user/${id}`)
    console.log(response)
    return response
}

