import { createSelector } from "@reduxjs/toolkit";
import store from "../store";

/** Selector **/
const LoginBoxSelector = (state) => state.newStyle;
const selectLoginBoxSelector = createSelector(
    LoginBoxSelector,
    state => state);

/** function */
const Style = () => {
    return selectLoginBoxSelector(store.getState());
}

export default Style;

