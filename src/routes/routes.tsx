import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../page/Home";
import { Products } from "../page/Products";
import { AboutUs } from "../page/AboutUs";
import { Cart } from "../page/Cart";

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
    ],
  },
]);

export default routes;
