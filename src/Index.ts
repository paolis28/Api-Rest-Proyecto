import cors from 'cors';
import express from 'express';
const appExpress = express();
import http from 'http';
const server = http.createServer(appExpress)
import {Signale} from 'signale'

const signale = new Signale();

// Habilita CORS
appExpress.use(cors());

server.listen(3000, () => {
    signale.success('Servidor escuchando en el puerto 3000');
});
