import { useState } from "react";
import type { User } from "./User.types";
import defaultUser from "./User.types";

function UserManage() {
  const [id, setId] = useState(10);
  const [name, setName] = useState("John Doe");
//   const [email, setEmail] = useState("john@mail.com");
//   const [phone, setPhone] = useState("1234564890");
//   const [roleId, setRoleId] = useState(4);
//   const [isActive, setIsActive] = useState(false);
const [user, setUser] = useState<User>(defaultUser)
  return (
    <>
    <div className="container py-5">
      <h1>User</h1>
      <p><b>ID:</b> {user?.id}</p>
      <p><b>Name:</b> {user?.name}</p>
      <p><b>Email:</b> {user?.email}</p>
      <p><b>Phone:</b> {user?.phone}</p>
      <p><b>Role ID:</b> {user?.roleId}</p>
      <p><b>Status:</b>{user?.isActive ? " Active" : " Inactive"}</p>
    </div> 
    </>
  );
}

export default UserManage;
