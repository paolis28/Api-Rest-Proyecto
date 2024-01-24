import cors from 'cors';
import express from 'express';
// import http from 'http';
const appExpress = express();
// const server = http.createServer(appExpress)
import {Signale} from 'signale'
import {inicializandoDatabase} from './database/mysql'
import { clienteRouter } from './Cliente/Infraestructura/Routes/cliente.router';

const signale = new Signale();

// Habilita CORS
appExpress.use(cors());
appExpress.use(express.json());

appExpress.use('/cliente',clienteRouter);

async function main() {
    try {
        await inicializandoDatabase();
        appExpress.listen(3000, () => {
            signale.success("servidor corriendo en el puerto 3000")
        })

    } catch (error) {
        signale.error("Error al iniciar el servidor", error)
    }
}

main()