import express from "express";
import { addClienteController } from "../dependencias";

export const clienteRouter = express.Router();

clienteRouter.post('/agregarCliente',(req,res)=>{
    try{
        addClienteController.run.bind(addClienteController)(req,res);
        return res.sendStatus(200);
    }catch(error){
        console.error(error);
        return res.sendStatus(500);
    }
});

