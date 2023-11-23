import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthState {
    isLogged: boolean;
    userId: string;
}

const initialState: AuthState = {
    isLogged: false,
    userId: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        authRequisition: (state, action: PayloadAction<{userId: string}>) => {
            state.isLogged = !state.isLogged
            state.userId = action.payload.userId
        }

    }
})

export default authSlice.reducer
export const { authRequisition } = authSlice.actions