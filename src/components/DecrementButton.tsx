import { IncDecServices } from "../reducers/IncDecSlice";
import { useAppDispatch } from "../store";

export const DecrementButton = ({ value }: { value: number | undefined }) => {
  const dispatch = useAppDispatch();
  const DecrClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!value) {
      dispatch(IncDecServices.actions.decrementNumber());
    } else {
      dispatch(IncDecServices.actions.decrementUserValue(value));
    }
  };
  return (
    <button
      style={{ backgroundColor: "red", marginLeft: "2em" }}
      onClick={DecrClickHandler}
    >
      -
    </button>
  );
};
