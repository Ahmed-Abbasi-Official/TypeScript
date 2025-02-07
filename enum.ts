enum Roles {
    user="user",
    admin="admin"
}

type UserDetails={
    name?:string;
    email:string;
    password:string
    role:Roles;
}

const user1={
    email:"aymi.coding@gmial.com",
    password:"Ahmed@12",
    role:Roles?.admin
}