import { Home } from "../pages/home.js";
import { Login } from "../pages/login.js";
import { Register } from "../pages/register.js";
import { createBrowserRouter, Link } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { useState } from "react";

export const Routers = () => {
  const [user, setUser] = useState();
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Home value={{ user, setUser }} />,
    },
    {
      path: "login",
      element: <Login value={{ user, setUser }} />,
    },
    {
      path: "register",
      element: <Register value={{ user, setUser }} />,
    },
  ]);
  return <RouterProvider router={routers} />;
};
