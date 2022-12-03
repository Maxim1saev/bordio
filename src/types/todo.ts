export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface Todos {
  todos: Todo[];
  loading: boolean;
  error: null | string;
}

export enum TodoActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
}

interface TodoAction {
  type: TodoActionTypes.FETCH_TODOS;
  payload: boolean;
}
interface TodoSuccessAction {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: Todo[];
}
interface TodoErrorAction {
  type: TodoActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}

export type Action = TodoAction | TodoSuccessAction | TodoErrorAction;
