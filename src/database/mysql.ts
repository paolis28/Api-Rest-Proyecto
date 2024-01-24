import {Sequelize} from 'sequelize-typescript';
import dotenv from 'dotenv';
import Cliente from '../Cliente/Infraestructura/Models/cliente.model';
import { Signale } from 'signale';
dotenv.config();
const signale = new Signale();

export const sequelize = new Sequelize(
    {
        host:process.env.HOST,
        username:process.env.USER,
        database:process.env.DB,
        password:process.env.DB_PASSWORD,
        port: 3306,
        dialect: "mysql",
        models:[Cliente]
    });

export async function inicializandoDatabase() {
    try {
        console.log(process.env.DB_HOST);
        await sequelize.authenticate();
        signale.success("Conexión estable, exitosa");
        await sequelize.sync({force: false});
    } catch (error) {
        console.log("No se pudo conectar a la base de datos", error);
        process.exit(1);
    }
}