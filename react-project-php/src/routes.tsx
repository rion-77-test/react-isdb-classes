import { createBrowserRouter } from "react-router";
import App from "./App";
import Dashboard from "./views/pages/Dashboard";
import Page404 from "./views/pages/404";
import Login from "./views/pages/Login";
// User
import UserManage from "./views/pages/user/UserManage";
import UserCreate from "./views/pages/user/UserCreate";
import UserEdit from "./views/pages/user/UserEdit";
import UserView from "./views/pages/user/UserView";
// Post
import PostManage from "./views/pages/post/PostManage";
import PostCreate from "./views/pages/post/PostCreate";
import PostEdit from "./views/pages/post/PostEdit";
import PostDetails from "./views/pages/post/PostDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // prettier-ignore
    children: [
      {path: "/", element: <Dashboard />,},
      // User
      {path: "/user",element: <UserManage />,},
      {path: "/user-create",element: <UserCreate />,},
      {path: "/user-edit/:id",element: <UserEdit/>,},
      {path: "/user-view/:id/",element: <UserView/>,},
      // Post
      {path: "/post",element: <PostManage/>,},
      {path: "/post-create",element: <PostCreate/>,},
      {path: "/post-edit/:id",element: <PostEdit/>,},
      {path: "/post-details/:id",element: <PostDetails/>,},
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

// export default routes
