import { createSlice } from "@reduxjs/toolkit";

const LoginBoxReducer = createSlice({
    name: "loginbox",
    initialState: { "width": 0 },
    reducers: {
        newStyle: {
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

export const { actions, reducer } = LoginBoxReducer;
export const { newStyle } = actions;

export default LoginBoxReducer;

