import { createSlice } from "@reduxjs/toolkit";

export const scoreSlice = createSlice({
    name: "score",
    initialState: {value: {score: 0}},
    reducers: {
        updateScore: (state, action) => {
            state.value = action.payload
        },
        resetScore: (state) => {
            state.value = {score: 0}
        }
    }
})

export const { updateScore, resetScore } = scoreSlice.actions
export default scoreSlice.reducer