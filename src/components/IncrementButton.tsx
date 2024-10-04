import React from "react";
import { useAppDispatch } from "../store";
import { IncDecServices } from "../reducers/IncDecSlice";

export const IncrementButton = ({ value }: { value: number | undefined }) => {
  const dispatch = useAppDispatch();
  const IncrClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!value) {
      dispatch(IncDecServices.actions.incrementNumber());
    } else {
      dispatch(IncDecServices.actions.incrementUserValue(value));
    }
  };
  return (
    <button style={{ backgroundColor: "green" }} onClick={IncrClickHandler}>
      +
    </button>
  );
};
