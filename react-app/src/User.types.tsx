export interface User {
    id: number | null;
    name: string;
    email: string;
    phone: string | null | number;
    roleId?: number;
    isActive: boolean;
}
// export type User = {
//   id: number | null;
//   name: string;
//   email: string;
//   phone: string | null | number;
//   roleId?: number;
//   isActive: boolean;
// };

const defaultUser: User = {
  id: null,
  name: "",
  email: "mail@example.com",
  phone: "123456789",
   roleId: 1,
  isActive: true,
};

export default defaultUser
