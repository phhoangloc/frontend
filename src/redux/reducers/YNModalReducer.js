import { createSlice } from "@reduxjs/toolkit";

const YNModalReducer = createSlice({
    name: "sidebar",
    initialState: { "height": "0px" },
    reducers: {
        newYNModalStyle: {
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

export const { actions, reducer } = YNModalReducer;
export const { newYNModalStyle } = actions;

export default YNModalReducer;

