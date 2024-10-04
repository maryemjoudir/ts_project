type Props = {
  firstName: string;
  lastName: string;
  arrData: {
    firstName: string;
    lastName: string;
  }[];
};
//array props
function SayHello({ firstName, lastName, arrData }: Props) {
  return (
    <div>
      <h4>
        Hello {firstName} {lastName}
      </h4>
      <div>
        {arrData.map((item) => (
          <li key={item.lastName}>
            {item.firstName} {item.lastName}
          </li>
        ))}
      </div>
    </div>
  );
}

export default SayHello;
