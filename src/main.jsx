import { ClerkProvider } from "@clerk/clerk-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./assets/Pages/About";
import Cart from "./assets/Pages/Cart";
import Contact from "./assets/Pages/Contact";
import Home from "./assets/Pages/Home";
import Products from "./assets/Pages/Products";
import "./index.css";
import RootLayout from "./Layouts/RootLayout";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

const router = createBrowserRouter([
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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
