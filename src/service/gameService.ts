import { api } from './api'

export const handleCreateGame = async (body: { apiReference: string, startedAt: Date, finishedAt: Date }) => {
    try {
        const response = api.post('/game', body);
        return response
    } catch (error) {
        throw error
    }
}

export const handleFindGameByApiId = async (apiId: string) => {
    try {
        const response = await api.get(`/game/${apiId}`)
        return response
    } catch (error) {
        throw error
    }
}

export const handleCreateGameList = async (body: { name: string, userId: string }) => {
    try {
        const response = await api.post('/gameList', body);
        return response
    } catch (error) {
        throw error
    }
}

export const handleDeleteGame = async (gameId: string) => {
    const response = await api.delete(`/game/${gameId}`);
    return response
}

export const handleFindGameListByUserId = async (userId: string) => {
    const response = await api.get(`/gameList/${userId}`)
    return response
}

export const handleFindGameListByName = async (listName: string, userId: string) => {
    const response = await api.get(`/gameList/name/${listName}/${userId}`);
    return response;
}

export const handleUpdateGameList = async (listId: string, body: {games: Object[]}) => {
    const response = await api.put(`/gameList/${listId}`, body)
    return response
}