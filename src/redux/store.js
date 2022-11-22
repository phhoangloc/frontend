import { configureStore } from "@reduxjs/toolkit";
import LoginBoxReducer from "./reducers/LoginBoxReducer";
import RegisterBoxReducer from "./reducers/RegisterBoxReducer";
import ResendBoxReducer from "./reducers/ResendBoxReducer";
import ResetBoxReducer from "./reducers/ResetBoxReducer";
import SidebarReducer from "./reducers/SidebarReducer";
import YNModalReducer from "./reducers/YNModalReducer";

const store = configureStore({

    reducer: {
        LoginBox: LoginBoxReducer.reducer,
        RegisterBox: RegisterBoxReducer.reducer,
        ResendBox: ResendBoxReducer.reducer,
        ResetBox: ResetBoxReducer.reducer,
        Sidebar: SidebarReducer.reducer,
        YNModal: YNModalReducer.reducer,
    }
});

export default store;

