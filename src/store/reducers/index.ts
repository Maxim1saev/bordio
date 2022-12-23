import { combineReducers } from "redux";

import { taskReducer } from "./taskReducer";

// используем утиилиту combineReducer для объединения всех редьюсеров в системе
export const rootReducer = combineReducers({
  tasks: taskReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
