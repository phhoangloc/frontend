import { createSlice } from "@reduxjs/toolkit";

const SidebarReducer = createSlice({
    name: "sidebar",
    initialState: { "width": 0 },
    reducers: {
        newSidebarStyle: {
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

export const { actions, reducer } = SidebarReducer;
export const { newSidebarStyle } = actions;

export default SidebarReducer;

