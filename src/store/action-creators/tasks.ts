import { TaskAction, TasksActionTypes } from "../../types/user";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchTasks = () => {
  return async (dispatch: Dispatch<TaskAction>) => {
    try {
      dispatch({ type: TasksActionTypes.FETCH_TASKS });

      const response = await axios.get("http://localhost:5000/tasks");

      dispatch({
        type: TasksActionTypes.FETCH_TASKS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: TasksActionTypes.FETCH_TASKS_ERROR,
        payload: "Ошибка при загрузке пользователей",
      });
    }
  };
};
