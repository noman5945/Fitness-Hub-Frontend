import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../page/Home";
import { Products } from "../page/Products";
import { AboutUs } from "../page/AboutUs";
import { Cart } from "../page/Cart";
import { ProductDetails } from "../page/ProductDetails";
import { CheckOut } from "../page/CheckOut";
import { CheckoutSuccess } from "../page/CheckoutSuccess";
import { CheckoutError } from "../page/CheckoutError";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product-details",
        element: <ProductDetails />,
      },
      {
        path: "/payment",
        element: <CheckOut />,
      },
      {
        path: "/payment-success",
        element: <CheckoutSuccess />,
      },
      {
        path: "/payment-error",
        element: <CheckoutError />,
      },
    ],
  },
]);

export default routes;
