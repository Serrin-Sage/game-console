import { createSlice } from "@reduxjs/toolkit";

export const statusSlice = createSlice({
    name: "status",
    initialState: {value: {status: false}},
    reducers: {
        gameOver: (state, action) => {
            state.value = action.payload
        },
        gameReset: (state) => {
            state.value = {status: false}
        }
    }
})

export const { gameOver, gameReset } = statusSlice.actions
export default statusSlice.reducer