import { CARGAR_CLIENTE} from '../types';

const initialState = {
    cliente: {}
}

const ClientesReducer = (state = initialState, action) => {
    switch(action.type){
        case CARGAR_CLIENTE : 
        return {
            ...state,
            cliente: action.payload
        }
        default:
            return state;
    }
}

export default ClientesReducer;