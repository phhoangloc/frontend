import { createSelector } from "@reduxjs/toolkit";
import store from "../store";

/** Selector **/
const ResetBoxSelector = (state) => state.newResetStyle;
const selectResetSelector = createSelector(
    ResetBoxSelector,
    state => state);

/** function */
const ResetBoxStyle = () => {
    return selectResetSelector(store.getState());
}

export default ResetBoxStyle;

