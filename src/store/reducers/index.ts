import {combineReducers} from "redux";

import {userReducer} from "./userReducer";
import {todoReducer} from "./todoReducer";

// используем утиилиту combineReducer для объединения всех редьюсеров в системе
export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
