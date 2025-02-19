import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Table } from "../components/ui/Table";
import { useUpdateProductsMutation } from "../redux/features/cart/cartAPI";
import { emptyCart } from "../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

export const CheckOut = () => {
  const { cartItem } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();
  const [updateProducts, { isError, isSuccess, error }] =
    useUpdateProductsMutation();
  const dispatch = useAppDispatch();
  let total = 0;
  cartItem.forEach((item) => {
    total = total + item.purchasePrice;
  });

  const onPurchase = () => {
    updateProducts(cartItem);
    console.log(isError);
    console.log(isSuccess);
    console.log(error);
    if (isSuccess) {
      dispatch(emptyCart());
      navigate("/payment-success");
    } else if (isError) {
      navigate("/payment-error");
    }
  };
  return (
    <div className=" flex flex-col items-center">
      <div className=" my-4">
        <h3 className=" font-bold ">Payment Info</h3>
      </div>
      <div className=" flex flex-col md:flex-row gap-[50px]">
        <div className=" w-[500px]">
          <h3 className=" text-center my-2">Cart Items</h3>
          <Table item={cartItem} />
          <h3 className=" text-center my-2">Total:{total}</h3>
        </div>
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>
            <div>
              <label
                htmlFor="Gym"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Gym
              </label>
              <input
                type="text"
                id="Gym"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Gym Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="123-45-678"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an option
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a Payment method</option>
              <option value="cash">Cash On Delivery</option>
              <option value="stripe">Stripe Payment</option>
            </select>
          </div>
          <div className=" mt-[10px]">
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Address
            </label>
            <textarea
              id="address"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Full address here"
            ></textarea>
          </div>
        </form>
        <div className=" my-3 ">
          <Button onClickFunc={onPurchase} title="Confirm Payment"></Button>
        </div>
      </div>
    </div>
  );
};
