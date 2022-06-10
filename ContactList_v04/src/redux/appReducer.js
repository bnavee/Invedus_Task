import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactReducer } from "./reducers/contactReducer";

const persistConfig = {
    key: "quoality-guest",
    storage,
    whitelist: ["contact"],
};

const appReducer = combineReducers({
    contact: contactReducer,
});

export default persistReducer(persistConfig, appReducer);
