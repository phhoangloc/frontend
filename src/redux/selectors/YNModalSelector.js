import { createSelector } from "@reduxjs/toolkit";
import store from "../store";

/** Selector **/
const YNModalSelector = (state) => state.newYNModalStyle;
const selectModalSelector = createSelector(
    YNModalSelector,
    state => state);

/** function */
const YNModalStyle = () => {
    return selectModalSelector(store.getState());
}

export default YNModalStyle;

