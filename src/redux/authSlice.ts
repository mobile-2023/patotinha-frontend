import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthState {
    number: number
}

const initialState: AuthState = {
    number: 0
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        incremment: (state, action) => {
            state.number = state.number += 1
        }

    }
})

export default authSlice.reducer
export const { incremment } = authSlice.actions