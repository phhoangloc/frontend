import { createSelector } from "@reduxjs/toolkit";
import store from "../store";

/** Selector **/
const RegisterBoxSelector = (state) => state.newResendStyle;
const selectRegisterSelector = createSelector(
    RegisterBoxSelector,
    state => state);

/** function */
const RegisterBoxStyle = () => {
    return selectRegisterSelector(store.getState());
}

export default RegisterBoxStyle;

