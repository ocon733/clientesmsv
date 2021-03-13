import { CARGAR_CLIENTE } from "../types";

export function CargarClienteAction(cliente){
 
    return {
        type: CARGAR_CLIENTE,
        payload: cliente
    }

}