import { createSelector } from "@reduxjs/toolkit";
import store from "../store";

/** Selector **/
const SidebarSelector = (state) => state.newResetStyle;
const selectSidebarSelector = createSelector(
    SidebarSelector,
    state => state);

/** function */
const SidebarStyle = () => {
    return selectSidebarSelector(store.getState());
}

export default SidebarStyle;

