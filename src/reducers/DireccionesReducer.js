import { CARGAR_DIRECCIONES} from '../types';

const initialState = {
    direcciones: []
}

const DireccionesReducer = (state = initialState, action) => {
    switch(action.type){
        case CARGAR_DIRECCIONES : 
        return {
            ...state,
            direcciones: action.payload
        }
        default:
            return state;
    }
}

export default DireccionesReducer