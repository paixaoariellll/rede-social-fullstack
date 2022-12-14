/* import { getSession } from "next-auth/react"; */
import db from "../../../utils/db";
import User from "../../../models/User";
import data from "../../../utils/data";

const handler = async (req, res) => {
    /*const session = await getSession({ req });
            if (!session || (session && !session.user.isAdmin)) {
            return res.status(401).send("Administrador, acesse a sua conta!");
    } */

    await db.connect();
    await User.deleteMany();
    await User.insertMany(data.users);
    await db.disconnect();
    res.send({ message: "Seed concluída com sucesso!" });
};

export default handler;
