import { CARGAR_SERVICIOS } from "../types";

export function CargarServiciosAction(servicios){
 
    return {
        type: CARGAR_SERVICIOS,
        payload: servicios
    }

}