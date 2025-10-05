import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Cart from "../Pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,

    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/cart",
        Component: Cart,
      },
    ],
  },
]);