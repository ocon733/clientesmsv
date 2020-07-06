import React, { Component } from 'react';
import './listado.css';
import Util from '../util_fechas.js';

export default class Listado extends Component {
    state = {
        items : []
    }

    componentDidMount(){
        fetch("http://localhost:8081/lista")
        .then(res=> res.json())
        .then(res => {
            this.setState({items: res});
        })
    }
/*
    fromdateJavaTojavascript = (date) =>{
        let fecha = new Date(date);
        return fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear();
    }
*/
    irDetalle = (id) => "/cliente/" + id;

    render() {
        return (
            <div>
            <h4>&nbsp;Listado de clientes MSV<hr/></h4>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>                
                        <th>Nombre</th>
                        <th>DOI</th>
                        <th>Teléfono</th>
                        <th>Provincia</th>
                        <th>Localidad</th>
                        <th>Fecha alta</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.items.map(item=>(
                    <tr key = {item[0]}>
                        <td className="listado-enlace"><a title="Ver detalle" href={this.irDetalle(item[0])}>{item[0]}</a></td>
                        <td className="listado-left">{item[3]} {item[4]}, {item[2]}</td>
                        <td>{item[5]}: {item[6]}</td>
                        <td>{item[7]}</td>
                        <td>{item[8]}</td>
                        <td>{item[9]}</td>
                        <td>{Util.fromdateJavaToJS(item[10])}</td>
                    </tr>    
                    ))}
                </tbody>
            </table>
            </div>
        )
    }
}
