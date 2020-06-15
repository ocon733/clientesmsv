import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/listado">Listado</Link>
                </div>
                <div>
                    <Link to="/formulario">Formulario</Link>
                </div>
                <div>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        )
    }
}
