import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { CartItemCard } from "../components/ui/CartItemCard";
import { useAppSelector } from "../redux/hook";

export const Cart = () => {
  const navigate = useNavigate();
  const { cartItem } = useAppSelector((state) => state.cart);
  console.log(cartItem.length);
  const goToCheckOut = () => {
    navigate("/payment");
  };
  return (
    <div className=" block h-screen">
      <div className=" text-center text-lg my-4">
        <h3 className=" font-bold text-lg lg:text-2xl my-[50px]">Cart Items</h3>
      </div>
      <div className=" grid grid-cols-5 gap-2 lg:ml-[50px]  ">
        <div className=" mr-4 md:mr-56">
          <p>SL NO</p>
        </div>
        <div className=" mr-[100px] md:mr-[500px]">
          <p>Item Name</p>
        </div>
        <div className=" mr-[90px] md:mr-[500px]">
          <p>Qty</p>
        </div>
        <div className=" mr-4 md:mr-56">
          <p>Price (BDT)</p>
        </div>
        <div>
          <p className=" font-bold text-base">Remove Action</p>
        </div>
      </div>
      {cartItem.length === 0 ? (
        <></>
      ) : (
        cartItem.map((item, index) => {
          return (
            <div className=" flex flex-col">
              <CartItemCard
                key={item._id}
                SL={index + 1}
                _id={item._id}
                name={item.name}
                Qty={item.Qty}
                price={item.price}
                custQty={item.customerQty}
              />
            </div>
          );
        })
      )}

      <div className=" flex flex-col items-end justify-center mx-10">
        <div className=" p-4">
          <h3 className=" text-center font-bold">Total Price</h3>
          <Button
            title="Proceed to CheckOut"
            onClickFunc={goToCheckOut}
            disablity={cartItem.length < 1 ? true : false}
          ></Button>
        </div>
      </div>
    </div>
  );
};
