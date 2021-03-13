import { VALIDA_LOGIN} from '../types';

const initialState = {
    login: false
}

const LoginReducer = (state = initialState, action) => {
    switch(action.type){
        case VALIDA_LOGIN : 
        return {
            ...state,
            user: action.payload
        }
        default:
            return state;
    }
}

export default LoginReducer