//import types
import { Product } from "../types/app";
type ProductProps = {
  productsData: Product[];
};
export const Products = (props: ProductProps) => {
  return (
    <div>
      {props.productsData.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <strong>{product.price}</strong>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};
