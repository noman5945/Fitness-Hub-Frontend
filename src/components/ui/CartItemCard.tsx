import { useState } from "react";
import { RemoveIcon } from "../../assets/icons/RemoveIcon";
import {
  removeCartItem,
  updateCartItemQty,
} from "../../redux/features/cart/cartSlice";
import { useAppDispatch } from "../../redux/hook";

type CartItemProps = {
  _id: string;
  SL: number;
  name: string;
  Qty: number;
  price: number;
  custQty: number;
};
export const CartItemCard = ({
  _id,
  SL,
  name,
  Qty,
  price,
  custQty,
}: CartItemProps) => {
  const dispatch = useAppDispatch();
  const [varCustQty, setVarCustQty] = useState(custQty);
  const increaseQty = () => {
    if (Qty > varCustQty) {
      setVarCustQty(varCustQty + 1);
      dispatch(
        updateCartItemQty({
          qtyNum: varCustQty,
          id: _id,
          currentPrice: varCustQty * price,
        })
      );
    }
  };
  const decreseQty = () => {
    if (varCustQty > 1) {
      setVarCustQty(varCustQty - 1);
      dispatch(
        updateCartItemQty({
          qtyNum: varCustQty,
          id: _id,
          currentPrice: varCustQty * price,
        })
      );
    }
  };
  return (
    <div className=" h-fit border shadow-md rounded-md p-5">
      <div className=" grid grid-cols-5 gap-2 lg:ml-[50px]">
        <div className=" mr-4 md:mr-56">
          <p>{SL === 0 ? "SL" : SL}</p>
        </div>
        <div className=" mr-[100px] md:mr-[500px]">
          <p>{name}</p>
        </div>
        <div className=" mr-[90px] md:mr-[500px] flex flex-row items-center gap-4">
          <button
            onClick={decreseQty}
            className=" rounded-full lg:w-[30px]  font-bold"
          >
            -
          </button>
          <p>{varCustQty}</p>
          <button
            onClick={increaseQty}
            className=" rounded-full lg:w-[30px]  font-bold"
          >
            +
          </button>
        </div>
        <div className=" mr-4 md:mr-56 ">
          <p>{varCustQty * price}</p>
        </div>
        <div>
          <button
            onClick={() => dispatch(removeCartItem(_id))}
            className=" rounded-full bg-red-600 hover:bg-red-700 w-[35px] h-[35px] p-1"
          >
            <RemoveIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
