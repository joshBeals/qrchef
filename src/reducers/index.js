import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import qrReducer from "./qrReducer";
import themeReducer from "./themeReducer";

export default combineReducers({
    theme: themeReducer,
    category: categoryReducer,
    qr: qrReducer
});