import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { CartItemCard } from "../components/ui/CartItemCard";

export const Cart = () => {
  const navigate = useNavigate();
  const goToCheckOut = () => {
    navigate("/payment");
  };
  return (
    <div className=" block h-screen">
      <div className=" text-center text-lg my-4">
        <h3 className=" font-bold text-lg lg:text-2xl">Cart Items</h3>
      </div>
      <div className=" flex flex-col">
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
      </div>
      <div className=" flex flex-col items-end">
        <div className=" p-4">
          <h3 className=" text-center font-bold">Total Price</h3>
          <Button
            title="Proceed to CheckOut"
            onClickFunc={goToCheckOut}
          ></Button>
        </div>
      </div>
    </div>
  );
};
