export interface ITaskItem {
  title: string;
  duration: string;
  color: string;
}

export interface ITask {
  title: string;
  items: ITaskItem[];
}

export interface TaskState {
  tasks: ITask[] | [];
  loading: boolean;
  error: null | string;
}

export enum TasksActionTypes {
  FETCH_TASKS = "FETCH_TASKS",
  FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS",
  FETCH_TASKS_ERROR = "FETCH_TASKS_ERROR",
}

interface FetchTasksAction {
  type: TasksActionTypes.FETCH_TASKS;
}

interface FetchTasksSuccessAction {
  type: TasksActionTypes.FETCH_TASKS_SUCCESS;
  payload: any[];
}

interface FetchTasksErrorAction {
  type: TasksActionTypes.FETCH_TASKS_ERROR;
  payload: string;
}

export type TaskAction =
  | FetchTasksAction
  | FetchTasksSuccessAction
  | FetchTasksErrorAction;
