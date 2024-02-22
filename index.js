// Express: Framework para crear una app que escuche un puerto especifico
import express from "express";

// Helmet: Agrega capa de seguridad para vulnerabilidades conocidas
//         mediante la aplicación de una serie de headers html
import helmet from "helmet";

// Se importan las configuraciones mediante el modulo config
// creado dentro de la ruta src/settings
import { config } from "./src/settings/config.js";

// Se importa conexion MongoDB
import { startConnection } from "./src/settings/database.js";

// Se importan los router
import { productRouter } from "./src/routers/product.router.js";
import { saleRouter } from "./src/routers/sale.router.js";

// Se inicializa Express
const app = express();

// Se inicializa Helmet
app.use(helmet());

// Se inicializan los middlewares para peticiones POST y PUT
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Se validan las configuraciones
let appBindAddress;
switch (config.APP_BIND_ADDRESS) {
    case 'any':
        appBindAddress = '0.0.0.0';
        break;
    case 'localhost':
        appBindAddress = '127.0.0.1';
        break;
    default:
        console.error("APP_BIND_ADDRESS incorrectly or not configured.");
        console.error("Valid Values: localhost / any");
        console.error("Stop execution");
        process.exit(5);
        break;
};

if ( config.APP_PORT === null | config.APP_PORT === undefined | config.APP_PORT === '' | config.APP_PORT == 0 ) {
    console.error("APP_PORT incorrectly or not configured.");
    console.error("Valid Values: any integer greater than 0");
    console.error("Stop execution");
    process.exit(5);
};

if ( config.MONGO_URI === null | config.MONGO_URI === undefined | config.MONGO_URI === '' ) {
    console.error("MONGO_URI not configured.");
    console.error("Stop execution");
    process.exit(5);
};

// Se establecen las rutas base
app.use(express.static('public'));
app.use("/api/products", productRouter);
app.use("/api/sales", saleRouter);

// Se comienza a escuchar el puerto
app.listen(config.APP_PORT, appBindAddress, async () => {
    await startConnection();
    console.log(`Server running on http://${config.APP_BIND_ADDRESS}:${config.APP_PORT}`);
});