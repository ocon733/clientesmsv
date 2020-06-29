import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './menu.component';
import Listado from './listado.component';
import Formulario from './formulario.component';
import Login from './login.component';
export default class Principal extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Menu/>
                   
                    <Switch>
                        <Route path="/listado" component={Listado}/>
                        <Route path="/formulario" component={Formulario}/>
                        <Route path="/login" component={Login}/>
                        <Route exact path="/cliente/:id" component={Formulario}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
