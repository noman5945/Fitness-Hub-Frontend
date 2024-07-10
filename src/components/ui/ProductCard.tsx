import defaultProd from "../../assets/Products/Dumbell.jpg";
import { Button } from "./Button";
type ProductCardProps = {
  name: string;
  description: string;
  price: number;
  qty: number;
};
export const ProductCard = ({
  name,
  description,
  price,
  qty,
}: ProductCardProps) => {
  return (
    <div className="w-[300px] p-1 max-w-sm bg-white border border-gray-200 flex flex-col rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className=" rounded-t-lg" src={defaultProd} alt="product image" />
      <div className="block p-2">
        <p>{name}</p>
        <p>{description}</p>
        <p>{price} BDT</p>
        <p>{qty}</p>
        <Button title="Details"></Button>
      </div>
    </div>
  );
};
