type StatusProps = {
  status: "loading" | "success" | "error";
};
function Status(props: StatusProps) {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data feteched successfully";
  } else if (props.status === "error") {
    message = "Error feteched Data";
  }
  return <div>Status - {message}</div>;
}

export default Status;
