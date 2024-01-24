import { Cliente } from "../Dominio/cliente";
import { ClienteRepositorio } from "../Dominio/clientes.repositorio";

export class AddClienteCasoUso{
    //En caso de que falle en execute cambiar a run

    constructor (readonly clienteRepositorio: ClienteRepositorio){}
    async run(id_cliente:number,nombre: string):Promise<Cliente | null>{
        try{
            const clienteCreado = await this.clienteRepositorio.addCliente(id_cliente,nombre);
            return clienteCreado;
        }catch(error){
            console.log("Error en cliente Caso de Uso", error);
            return null;
        }
    }
}