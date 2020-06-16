import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

export default class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="menu-item">
                    <Link to="/listado">Listado</Link>
                </div>
               <span className="menu-separador">|</span>
                <div className="menu-item">
                    <Link to="/formulario">Formulario</Link>
                </div>
                <span className="menu-separador">|</span>
                <div className="menu-item">
                    <Link to="/login">Login</Link>
                </div>
            </div>
        )
    }
}
