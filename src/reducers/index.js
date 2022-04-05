import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import themeReducer from "./themeReducer";

export default combineReducers({
    theme: themeReducer,
    category: categoryReducer
});