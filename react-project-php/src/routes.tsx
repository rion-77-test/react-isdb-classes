import { createBrowserRouter } from "react-router";
import App from "./App";
import Dashboard from "./views/pages/Dashboard";
import UserManage from "./views/pages/user/UserManage";
import UserCreate from "./views/pages/user/UserCreate";
import Page404 from "./views/pages/404";
import UserEdit from "./views/pages/user/UserEdit";
import UserView from "./views/pages/user/UserView";
import Login from "./views/pages/Login";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/user",
        element: <UserManage />,
      },
      {
        path: "/user-create",
        element: <UserCreate />,
      },
      {
        path: "/user-edit",
        element: <UserEdit/>,
      },
      {
        path: "/user-view",
        element: <UserView/>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

// export default routes
