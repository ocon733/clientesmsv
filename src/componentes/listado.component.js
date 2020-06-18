import React, { Component } from 'react';
import './listado.css';


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

    fromdateJavaTojavascript = (date) =>{
        let fecha = new Date(date);
        return fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear();
    }

    irDetalle = (id) => "/cliente/" + id;

    render() {
        return (
            <div>
            <h4>Listado de clientes MSV<hr/></h4>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Cliente MSV</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>DOI</th>
                        <th>Telefono</th>
                        <th>Provincia</th>
                        <th>Municipio</th>
                        <th>Fecha alta</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.items.map(item=>(
                    <tr Key = {item[0]}>
                        <td><a href={this.irDetalle(item[0])}>{item[0]}</a></td>
                        <td>{item[1]}</td>
                        <td>{item[2]}</td>
                        <td>{item[3]} {item[4]}</td>
                        <td>{item[5]}: {item[6]}</td>
                        <td>{item[7]}</td>
                        <td>{item[8]}</td>
                        <td>{item[9]}</td>
                        <td>{ this.fromdateJavaTojavascript(item[10])}</td>
                    </tr>    
                    ))}
                </tbody>
            </table>
            </div>
        )
    }
}
