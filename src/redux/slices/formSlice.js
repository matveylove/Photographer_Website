import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: 'form',
    initialState: {
        fioValue: '',
        loginValue: '',
        emailValue: '',
    },
    reducers: {
        setLoginValue: (state, action) => {
            state.loginValue = action.payload;
        },
        setEmailValue: (state, action) => {
            state.emailValue = action.payload;
        },
        setFioValue: (state, action) => {
            state.fioValue = action.payload;
        },
    }
});

export const { setLoginValue, setEmailValue, setFioValue } = formSlice.actions;
export default formSlice.reducer;