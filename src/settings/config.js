// Dotenv: Lee configuraciones del archivo .env y crea variables con el mismo nombre
import "dotenv/config";

export const config = {
    APP_PORT: process.env.APP_PORT,
    APP_BIND_ADDRESS: process.env.APP_BIND_ADDRESS,
    MONGO_URI: process.env.MONGO_URI
};