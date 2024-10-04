import { IncDecServices } from "../reducers/IncDecSlice";
import { useAppDispatch } from "../store";

export const ResetButton = () => {
  const dispatch = useAppDispatch();
  const resetButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(IncDecServices.actions.resetValue());
  };
  return (
    <button
      style={{
        backgroundColor: "gray",
        marginLeft: "11em",
        marginTop: "0.5em",
      }}
      onClick={resetButton}
    >
      reset
    </button>
  );
};
