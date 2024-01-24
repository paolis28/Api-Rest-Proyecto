import { Request, Response } from "express";
import { AddClienteCasoUso } from "../../Aplicacion/addCliente.CasoUso";

export class AddClienteController{
    constructor(readonly addClienteCasoUso:AddClienteCasoUso){}
    
    async run(req: Request, res: Response){
        try {
            let {id_cliente,nombre}=req.body;
            let clienteCreado = await this.addClienteCasoUso.run(id_cliente,nombre);

            if(clienteCreado){
                return res.status(200).send({
                    status:"success",
                    data:{
                        id_cliente: clienteCreado.id_cliente,
                        nombre:clienteCreado.nombre
                    },
                    message:"Cliente registrado"
                })
            }else{
                return res.status(400).send({
                    status:"Error",
                    data:[],
                    message:"Error al registrar Cliente"
                })
            }
        } catch (error) {
            console.log("Error en AddClienteController", error);
            res.status(500).send({
                status:"Error",
                message:"Error en server"
            })
            
        }
    }
}