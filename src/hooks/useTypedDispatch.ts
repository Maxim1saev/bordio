import {useDispatch} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

import {store} from "../store";

type AppDispatch = ThunkDispatch<typeof store, any, AnyAction>;

export const useTypedDispatch: () => AppDispatch = useDispatch;
