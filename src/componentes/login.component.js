import React, {  useDispatch, useState } from 'react'
import { Paper, TextField, Button } from '@material-ui/core';
import { loginAction } from '../actions/LoginAction';



const Login = () => {

            const [login, setLogin] = useState({
                        email_usuario:"",
                        clave:""
                    });
            
            const dispatch = useDispatch();       
                    
            const handlerSubmiLogin = (e) => {
                
                e.preventDefault();
                const data = new FormData ( e.target);
                dispatch(loginAction(data));
                /*
                fetch("http://localhost:8081/login", {
                    method: 'POST', 
                    body: data         
                })
                .then(res=> res.json())
                .then(res => {
                    alert("login");
                })
                .catch(error => console.error('Error:', error))
                .then(response => alert('Login correcto '));
                */
            }

            const handlerLogin = e => { 
                setLogin({ ...login,  [e.target.name]:e.target.value    }) 
            }

    return (
        <div>
            <Paper elevation={3}>
                    <form name="formLogin" onSubmit={handlerSubmiLogin}>

                    <h4 className="formulario-titulo">Login de acceso<hr/></h4>
                    <TextField className="formItem" name="email_usuario"  id="email_usuario" 
                         label="E-mail" value={login.email_usuario} onChange={ handlerLogin} />
                                              
                    <TextField className="formItem" name="clave" type="password" id="clave" label="Clave" 
                             value={login.clave} onChange={ handlerLogin}/>

                    <div className="formulario-tabla">
                            
                            <Button variant="contained" color="primary" type="submit" size="small">Aceptar</Button>
                            <Button variant="contained"  size="small" onClick={() => console.log("hola")}>Cancelar</Button>
                        </div>


                     </form>
                </Paper>
        </div>
    )
}

export default Login