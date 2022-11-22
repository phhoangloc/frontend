import { createSelector } from "@reduxjs/toolkit";
import store from "../store";

/** Selector **/
const ResendBoxSelector = (state) => state.newResendStyle;
const selectResendSelector = createSelector(
    ResendBoxSelector,
    state => state);

/** function */
const ResendBoxStyle = () => {
    return selectResendSelector(store.getState());
}

export default ResendBoxStyle;

