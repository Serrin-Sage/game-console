import { createSlice } from "@reduxjs/toolkit";

export const powerSlice = createSlice({
    name: "power",
    initialState: {value: {status: false}},
    reducers: {
        turnOn: (state, action) => {
            state.value = action.payload
        },
        turnOff: (state, action) => {
            state.value = {status: false}
        }
    }
})

export const { turnOn, turnOff } = powerSlice.actions
export default powerSlice.reducer