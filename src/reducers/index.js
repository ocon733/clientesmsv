import {combineReducers} from 'redux';
import ClientesReducer from './ClientesReducer';
import DireccionesReducer from './DireccionesReducer';
import loginReducer from './loginReducer';
import ServiciosReducer from './ServiciosReducer';

export default combineReducers ({
    login: loginReducer,
    direcciones: DireccionesReducer,
    servicios: ServiciosReducer,
    clientes: ClientesReducer
});