import { CARGAR_DIRECCIONES } from "../types";

export function CargarDireccionesAction(direcciones){
 
    return {
        type: CARGAR_DIRECCIONES,
        payload: direcciones
    }

}