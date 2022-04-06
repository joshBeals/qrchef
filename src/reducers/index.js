import { combineReducers } from "redux";
import bgColorReducer from "./bgColorReducer";
import categoryReducer from "./categoryReducer";
import fgColorReducer from "./fgColorReducer";
import qrReducer from "./qrReducer";
import themeReducer from "./themeReducer";

export default combineReducers({
    theme: themeReducer,
    category: categoryReducer,
    qr: qrReducer,
    fgColor: fgColorReducer,
    bgColor: bgColorReducer
});