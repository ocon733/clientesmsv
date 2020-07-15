import React, { Component } from 'react';
import './listado.css';
import Util from '../util_fechas.js';

export default class Listado extends Component {
    state = {
        items : [],
        nombre:"",
        apellido1:"",
        email:"",
        tlf_contacto:"",
        doi:""
    }
  
    componentDidMount(){
     
/*
        fetch("http://localhost:8081/lista")
        .then(res=> res.json())
        .then(res => {
            this.setState({items: res});
        })
*/
    }

    irDetalle = (id) => "/cliente/" + id;

    buscarFiltro(e){
        e.preventDefault();
        const data = new FormData ( e.target);
        fetch("http://localhost:8081/filtro", {
            method: 'POST', 
            body: data         
        })
        .then(res=> res.json())
        .then(res => {
            this.setState({items: res});

        });
    }

    render() {
        return (
          <div>
              <form onSubmit={this.buscarFiltro.bind(this)}>
            <div className="panel">
            <h4>&nbsp;Búsqueda de clientes MSV<hr/></h4>
                    <div className="form-item">
                        <label htmlFor="nombre">Nombre : </label>
                        <input name="nombre" size="50"  id="nombre" type="text" 
                        onChange={ e => this.setState({nombre:e.target.value})} />
                    </div>
                    <div className="form-item">
                        <label htmlFor="apellido1">Primer apellidos : </label>
                        <input name="apellido1" size="50"  id="apellido1" type="text" 
                        onChange={ e => this.setState({apellido1:e.target.value})} />
                    </div>
                    <div className="form-item">
                        <label htmlFor="apellido2">Segundo apellido : </label>
                        <input name="apellido2" size="50"  id="apellido2" type="text" 
                        onChange={ e => this.setState({apellido2:e.target.value})} />
                    </div>
                    <div className="form-item">
                        <label htmlFor="tlf_contacto">Teléfono de contacto : </label>
                        <input name="tlf_contacto" size="50"  id="tlf_contacto" type="text" 
                        onChange={ e => this.setState({tlf_contacto:e.target.value})} />
                    </div>
                    <div className="form-item">
                        <label htmlFor="doi">D.O.I. : </label>
                        <input name="doi" size="50"  id="doi" type="text" 
                        onChange={ e => this.setState({doi:e.target.value})} />
                    </div>
                    <div className="form-item">
                        <label htmlFor="email_contacto">E-mail : </label>
                        <input name="email_contacto" size="50"  id="email_contacto" type="text" 
                        onChange={ e => this.setState({email_contacto:e.target.value})} />
                    </div>
                    <div className="formulario-tabla">
                            <button type="submit">Buscar</button>
                    </div>
            </div>
            </form>
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
