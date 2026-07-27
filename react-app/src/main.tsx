import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.tsx";
import CardSection from "./CardSection.tsx";
// import {Button as Btn} from './Button.tsx'
import Counter from "./Count.tsx";
import Eff from "./Effects.tsx" 
import UserManage from "./UserManage.tsx";


createRoot(document.getElementById("main")!).render(
  <StrictMode>
    {/* <App /> */}
    {/*<Btn/> */}
    {/* <Counter /> */}
    {/* <CardSection /> */}
    <Eff></Eff>
    <UserManage/>
  </StrictMode>
);
