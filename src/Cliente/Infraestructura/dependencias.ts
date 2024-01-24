import { ClienteRepositorioInfra } from "./cliente.repositorio.Infra";
import { AddClienteCasoUso } from "../Aplicacion/addCliente.CasoUso";
import { AddClienteController } from "./Controller/addCliente.controller";

export const clienteRepositorioInfra = new ClienteRepositorioInfra();

export const addClienteCasoUso = new AddClienteCasoUso(clienteRepositorioInfra);
export const addClienteController = new AddClienteController(addClienteCasoUso)