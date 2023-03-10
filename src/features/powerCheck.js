import { createSlice } from "@reduxjs/toolkit";

export const powerSlice = createSlice({
    name: "power",
    initialState: {value: {power: false}},
    reducers: {
        turnOn: (state, action) => {
            state.value = action.payload
        },
        turnOff: (state, action) => {
            state.value = {value: {power: false}}
        }
    }
})

export const { turnOn, turnOff } = powerSlice.actions
export default powerSlice.reducer