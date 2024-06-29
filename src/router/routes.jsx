import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Product from "../pages/Product/Product";
import Pricing from "../pages/Pricing/Pricing";
import Homepage from "../pages/Homepage/Homepage";
import AppLayout from "../pages/AppLayout/AppLayout";
import Login from "../pages/Login/Login";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "app",
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <div>All the cities</div>,
          },
          {
            path: "cities",
            element: <div>All the cities</div>,
          },
          {
            path: "countries",
            element: <div>All the countries</div>,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
    errorElement: <PageNotFound />,
  },
]);
