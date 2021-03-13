import { CARGAR_SERVICIOS} from '../types';

const initialState = {
    servicios: []
}

const ServiciosReducer = (state = initialState, action) => {
    switch(action.type){
        case CARGAR_SERVICIOS : 
        return {
            ...state,
            servicios: action.payload
        }
        default:
            return state;
    }
}

export default ServiciosReducer