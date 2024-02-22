// Mongoose: Biblioteca de funciones para interactuar con MongoDB
import { connect } from "mongoose";

import { config } from "./config.js";

export const startConnection = async () => {
    try {
        const db = await connect(config.MONGO_URI, {
            dbName: "coloreingenio"
        });
        console.log("DB si connected to", db.connection.name);
    } catch (error) {
        console.error(error);
    }
}