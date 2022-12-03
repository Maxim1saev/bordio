import {legacy_createStore as createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers";

// первым аргументом принимает редьюсер вторым мидлвэр через специальную функцию
// тут один мидлвэр для ассинхронных экшенов - thunk
export const store = createStore(rootReducer, applyMiddleware(thunk));
