import MainLayout from "@/components/layouts/MainLayout";
import About from "@/pages/About";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/CheckOut";
import Error from "@/pages/Error";
import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetails";
import ProductManagement from "@/pages/ProductManagement";
import Products from "@/pages/Products";
import Success from "@/pages/Success";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
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
        path: "/products/:id",
        element: <ProductDetail />,
      },

      {
        path: "products-management",
        element: <ProductManagement />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/success",
        element: <Success />,
      },
    ],
  },
]);
