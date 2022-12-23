import { TaskState, TasksActionTypes, TaskAction } from "../../types/user";

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};

export const taskReducer = (
  state = initialState,
  action: TaskAction
): TaskState => {
  switch (action.type) {
    case TasksActionTypes.FETCH_TASKS:
      return { ...state, loading: true };

    case TasksActionTypes.FETCH_TASKS_SUCCESS:
      return { tasks: action.payload, loading: false, error: null };

    case TasksActionTypes.FETCH_TASKS_ERROR:
      return { tasks: [], loading: false, error: action.payload };

    default:
      return state;
  }
};
