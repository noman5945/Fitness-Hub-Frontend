import { useNavigate } from "react-router-dom";
import defaultProd from "../../assets/Products/Dumbell.jpg";
import { Button } from "./Button";
import { useAppDispatch } from "../../redux/hook";
import { setProductID } from "../../redux/features/product/productSlice";
type ProductCardProps = {
  name: string;
  category: string;
  price: number;
  qty: number;
  img: string;
  _id: string;
  description: string;
};
export const ProductCard = ({
  name,
  category,
  price,
  qty,
  img,
  _id,
  description,
}: ProductCardProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const goToDetails = () => {
    const productData = {
      name,
      category,
      price,
      qty,
      img,
      _id,
      description,
    };
    dispatch(setProductID(productData._id));
    navigate("/product-details");
  };
  return (
    <div className="w-[300px] p-1 max-w-sm bg-white border border-gray-200 flex flex-col rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className=" rounded-t-lg w-[300px] h-[200px]"
        src={img ? img : defaultProd}
        alt="product image"
      />
      <div className="block p-2">
        <p className=" font-bold text-lg">{name}</p>
        <p className=" overflow-hidden font-normal text-base">{category}</p>
        <p>
          <span className=" font-semibold">{price}</span> BDT
        </p>
        <p>
          <span className=" font-semibold">{qty}</span> pcs
        </p>
        <Button
          customStyle="block w-full rounded bg-blue-700 px-9 py-2 text-sm font-medium text-white shadow hover:bg-blue-800 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
          title="Details"
          onClickFunc={goToDetails}
        ></Button>
      </div>
    </div>
  );
};
