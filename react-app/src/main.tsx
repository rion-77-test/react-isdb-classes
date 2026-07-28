import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.tsx";
import CardSection from "./CardSection.tsx";
// import {Button as Btn} from './Button.tsx'
import Counter from "./Count.tsx";
import Eff from "./Effects.tsx" 
import UserManage from "./UserManage.tsx";
import Home from "./Home.tsx";
import Login from "./Login.tsx";

const links = createBrowserRouter([
  // {path: "/", element: <App/>},
  // {path: "/user", element: <UserManage/>},
  // {path: "/card", element: <CardSection/>},
  // {path: "/test", element: <h1>Test Page</h1>},
  {path: "/login", element: <Login/>},
  {path: "/", element: <App/>,
    children: [
      {path: "/", element: <Home/>},
      {path: "/user", element: <UserManage/>},
      {path: "/card", element: <CardSection/>},
    ]
  },
  {path: "*", element: <h1 className="text-danger text-center py-5">404 page not fount</h1>},
]);

createRoot(document.getElementById("main")!).render(
  <StrictMode>
     <RouterProvider router={links} />
  </StrictMode>
);
