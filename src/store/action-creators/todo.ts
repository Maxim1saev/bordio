import axios from "axios";
import {Dispatch} from "redux";
import {Action, TodoActionTypes} from "../../types/todo";

export const fetchTodo = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: TodoActionTypes.FETCH_TODOS,
      payload: true,
    });

    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        dispatch({
          type: TodoActionTypes.FETCH_TODOS_SUCCESS,
          payload: response.data,
        });
      })
      .catch(() => {
        dispatch({
          type: TodoActionTypes.FETCH_TODOS_ERROR,
          payload: "Ошибка получения списка дел",
        });
      });
  };
};
