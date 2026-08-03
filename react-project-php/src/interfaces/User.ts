export interface User  {
    id?: number,
    name: string,
    email: string,
    role_id: number,
    password?: string;
}

export const defaultUser: User = {
    name: "Asia",
    email: "",
    role_id: 0
}
