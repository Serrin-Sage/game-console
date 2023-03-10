import { createSlice } from "@reduxjs/toolkit";

export const titleSlice = createSlice({
    name: "title",
    initialState: { value: { status: false } },
    reducers: {
        activeTitle: (state, action) => {
            state.value = action.payload
        },
        deactiveTitle: (state, action) => {
            state.value = { status: false }
        }
    }
})

export const { activeTitle, deactiveTitle } = titleSlice.actions
export default titleSlice.reducer