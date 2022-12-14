import bcrypt from "bcryptjs";

const data = {
    users: [
        {
            name: "Administrador",
            image: "/imgUser/user (1).jpg",
            lastName: "Local",
            email: "admin@example.com",
            password: bcrypt.hashSync("Fatecano2023!"),
            isAdmin: true,
        },
        {
            name: "Administrador",
            image: "/imgUser/user (2).jpg",
            lastName: "Online",
            email: "admin2@example.com",
            password: bcrypt.hashSync("Fatecano2023!"),
            isAdmin: true,
        },
        {
            name: "Usuário",
            image: "/imgUser/user (3).jpg",
            lastName: "Local",
            email: "user@example.com",
            password: bcrypt.hashSync("Fatecano2023!"),
            isAdmin: false,
        },
        {
            name: "Usuário",
            image: "/imgUser/user (4).jpg",
            lastName: "Online",
            email: "user2@example.com",
            password: bcrypt.hashSync("Fatecano2023!"),
            isAdmin: false,
        },
    ],

}

export default data;