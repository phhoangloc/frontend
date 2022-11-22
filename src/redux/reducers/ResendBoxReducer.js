import { createSlice } from "@reduxjs/toolkit";

const ResendBoxReducer = createSlice({
    name: "resendbox",
    initialState: { "width": 0 },
    reducers: {
        newResendStyle: {
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
export const { newResendStyle } = actions;

export default ResendBoxReducer;

