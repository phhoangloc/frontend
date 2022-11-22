import { createSlice } from "@reduxjs/toolkit";

const ResendBoxReducer = createSlice({
    name: "resetbox",
    initialState: { "width": 0 },
    reducers: {
        newResetStyle: {
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

export const { actions, reducer } = ResendBoxReducer;
export const { newResetStyle } = actions;

export default ResendBoxReducer;

