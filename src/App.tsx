import "./App.css";
import Button from "./assets/components/Button";
import { Container } from "./assets/components/Container";
import Heading from "./assets/components/Heading";
import { Input } from "./assets/components/Input";
import Layout from "./assets/components/Layout";
import { Products } from "./assets/components/Products";
import SayHello from "./assets/components/SayHello";
import Status from "./assets/components/Status";

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
  return (
    <>
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
