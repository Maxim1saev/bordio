import {useSelector, TypedUseSelectorHook} from "react-redux";
import {RootState} from "../store/reducers";

// обычный useSelector не дружит с типами поэтому типизируем руками, рецепт есть на оф сайте
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
