import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import { Container } from "./components/Container";
import Heading from "./components/Heading";
import { Input } from "./components/Input";
import Layout from "./components/Layout";
import { Products } from "./components/Products";
import SayHello from "./components/SayHello";
import Status from "./components/Status";
import { useAppDispatch, useTypedSelector } from "./store";
import { IncrementButton } from "./components/IncrementButton";
import { DecrementButton } from "./components/DecrementButton";
import { ResetButton } from "./components/ResetButton";
import { IncDecServices } from "./reducers/IncDecSlice";

function App() {
  const objData = {
    firstName: "maryem",
    lastName: "joudir",
  };
  const arrData = [
    {
      firstName: "maryem1",
      lastName: "joudir1",
    },
    {
      firstName: "maryem2",
      lastName: "joudir2",
    },
    {
      firstName: "maryem3",
      lastName: "joudir3",
    },
  ];
  const productData = [
    {
      id: 1,
      name: "maryem1",
      price: 2,
      description: "joudir1",
    },
    {
      id: 2,
      name: "maryem1",
      price: 2,
      description: "joudir1",
    },
    {
      id: 3,
      name: "maryem1",
      price: 2,
      description: "joudir1",
    },
  ];
  const currentNumber: number = useTypedSelector(
    (state) => state.IncDec.currentNumber
  );
  const apiNumber = useTypedSelector((state) => state.IncDec.apiNumber);
  const dispatch = useAppDispatch();
  const [userNumber, setUserNumber] = useState<number>();
  const userNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserNumber(+e.target.value); //+: convertie la valeur de l'input a un number par ce que tous les valeur de input se sont des chaine de caractére ;
  };
  useEffect(() => {
    if (apiNumber !== null) {
      setUserNumber(apiNumber);
    } else {
      setUserNumber(undefined);
    }
  }, [apiNumber]);
  const randomNumberGeneratorButton = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    dispatch(IncDecServices.getRandomNumber()); //sending an api request by calling thunk
  };

  return (
    <>
      <h1 style={{ color: "gray" }}>{currentNumber}</h1>
      <div>
        <IncrementButton value={userNumber} />
        <DecrementButton value={userNumber} />
      </div>
      <ResetButton />
      <input
        type="number"
        value={userNumber ? userNumber : undefined}
        onChange={userNumberHandler}
      />
      <button onClick={randomNumberGeneratorButton}>
        Get Random Number From API
      </button>

      <hr />
      <SayHello
        firstName={objData.firstName}
        lastName={objData.lastName}
        arrData={arrData}
      />
      <Status status="loading" />
      <Layout>
        <Heading>this is a heading</Heading>
      </Layout>
      <Button handleClick={(e, id) => console.log(e.target, id)} />
      <Input
        value=""
        handleChange={(event) => console.log(event.target.value)}
      />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <Products productsData={productData} />
    </>
  );
}

export default App;
