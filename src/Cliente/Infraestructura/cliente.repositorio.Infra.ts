import { Cliente } from "../Dominio/cliente";
import { ClienteRepositorio } from "../Dominio/clientes.repositorio";
import ClienteModel from "./Models/cliente.model";
import {Signale} from 'signale'

const signale = new Signale();

export class ClienteRepositorioInfra implements ClienteRepositorio {
    async addCliente(id_cliente: number, nombre: string): Promise<Cliente | null> {
        try {
            const clienteAgregado = await ClienteModel.create({id_cliente, nombre});
            return new Cliente(clienteAgregado.id_cliente, clienteAgregado.nombre)
        } catch (error) {
            signale.error("Error al agregar cliente en repositorio infraestructura", error)
            return null
        }
    }

    async getCliente(id_cliente: number): Promise<Cliente | null>{
        try{
            const clienteAgregado = await ClienteModel.findOne({where: {id_cliente: id_cliente}})
            if(clienteAgregado){
                return new Cliente(clienteAgregado.id_cliente, clienteAgregado.nombre)
            }else{
                return null
            }
        }catch (error){
            signale.error("Error al obtener cliente en repositorio infraestructura")
            return null;
        }
    }
}
