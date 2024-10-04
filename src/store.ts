import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import IncDecReducer from "./reducers/IncDecSlice";

const store = configureStore({
  reducer: {
    IncDec: IncDecReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>(); // pour effectuer une action
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector; // Used to get the data from the store in the component

export default store;
