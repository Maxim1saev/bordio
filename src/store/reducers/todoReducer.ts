import {Todos, Todo, TodoActionTypes, Action} from "../../types/todo";

const initialState: Todos = {
  todos: [],
  loading: false,
  error: null,
};

export const todoReducer = (state = initialState, action: Action): Todos => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return {
        todos: [],
        loading: true,
        error: null,
      };

    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return {
        todos: action.payload,
        loading: false,
        error: null,
      };

    case TodoActionTypes.FETCH_TODOS_ERROR:
      return {
        todos: [],
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
