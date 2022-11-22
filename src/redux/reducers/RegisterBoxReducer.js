import { createSlice } from "@reduxjs/toolkit";

const RegisterBoxReducer = createSlice({
    name: "registerbox",
    initialState: { "width": 0 },
    reducers: {
        newRegisterStyle: {
            reducer: (state, action) => {
                return (state = action.payload);
            },
            prepare: (msg) => {
                return {
                    payload: msg
                };
            }
        }
    }
});

export const { actions, reducer } = RegisterBoxReducer;
export const { newRegisterStyle } = actions;

export default RegisterBoxReducer;

