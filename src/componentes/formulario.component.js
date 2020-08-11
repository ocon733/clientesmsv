import React, { Component } from 'react';
import './formulario.css';
import Util from '../util_fechas.js';
import Clientes from './clientes.component';

export default class Formulario extends Component {

    constructor(props){
        super(props);
       this.state = {  
           
        direcciones : [],
        servicios: [],

        dir_tipo_via:"",
        dir_direccion:"",
        dir_numero:"",
        dir_puerta:"",
        dir_piso:"",
        dir_provincia:"",
        dir_localidad:"",
        dir_cp:"",
        dir_tipo_domicilio:"",
        dir_id_cliente:"",
        dir_id:"",

        serv_id:"",
        serv_id_cliente:"",
        serv_tratamiento: "",
        serv_info_tratamiento:"",
        serv_fecha_inicio_tratamiento:"",
        serv_fecha_fin_tratamiento:""
        }

    }

    montado = false;

    componentWillUnmount = () =>{
        this.montado = false;
    }

    componentDidMount = () => {  
        this.montado = true;     
        if ( this.props.match.params.id !== undefined){
            fetch("http://localhost:8081/cliente/" + this.props.match.params.id )
            .then(res=> res.json())
            .then(res => {
                
                if ( this.montado){
    
                    

                    let dir = [];
                    for (let i = 0; i < res.direcciones.length; i++) {        
                        dir.push(res.direcciones[i]);
                    }
                    this.setState({direcciones:dir});

                    let serv = [];
                    for (let i = 0; i < res.servicios.length; i++) {
                        serv.push(res.servicios[i]);
                    }
                    this.setState({servicios:serv});

                    this.setState({nueva_direccion:false});
                    this.setState({nuevo_servicio:false});
                    this.setState({nuevo_cliente:false});

                }

            })
        }
    }

    

    handlerSubmitDirecciones = (e) => {
        e.preventDefault();
        const data = new FormData ( e.target);
        fetch("http://localhost:8081/nuevadir", {
            method: 'POST', 
            body: data         
        })
        .then(res=> res.json())
        .then(res => {
           window.location.href ="/cliente/"+ this.state.id_cliente;
        })
        .catch(error => console.error('Error:', error))
        .then(response => alert('Guardado correctamente '));
    }
    handlerSubmitServicios = (e) => {
        e.preventDefault();
        const data = new FormData ( e.target);
        fetch("http://localhost:8081/nuevoserv", {
            method: 'POST', 
            body: data         
        })
        .then(res=> res.json())
        .then(res => {
           window.location.href ="/cliente/"+ this.state.id_cliente;
        })
        .catch(error => console.error('Error:', error))
        .then(response => alert('Guardado correctamente '));
    }


    editDireccion (index) {
        this.setState({nueva_direccion:true});
        this.setState({dir_direccion: this.state.direcciones[index].direccion});
        this.setState({dir_cp: this.state.direcciones[index].cp});
        this.setState({dir_localidad: this.state.direcciones[index].localidad});
        this.setState({dir_numero: this.state.direcciones[index].numero});
        this.setState({dir_piso: this.state.direcciones[index].piso});
        this.setState({dir_provincia: this.state.direcciones[index].provincia});
        this.setState({dir_puerta: this.state.direcciones[index].puerta});
        this.setState({dir_tipo_via: this.state.direcciones[index].tipo_via});
        this.setState({dir_tipo_domicilio: this.state.direcciones[index].tipo_domicilio});
        this.setState({dir_id_cliente: this.state.direcciones[index].id_cliente});
        this.setState({dir_id: this.state.direcciones[index].id});
    }

    editServicio ( index) {
        this.setState({nuevo_servicio:true});
        this.setState({serv_tratamiento: this.state.servicios[index].tratamiento});
        this.setState({serv_info_tratamiento: this.state.servicios[index].info_tratamiento});
        this.setState({serv_fecha_inicio_tratamiento: this.state.servicios[index].fecha_inicio_tratamiento});
        this.setState({serv_fecha_fin_tratamiento: this.state.servicios[index].fecha_fin_tratamiento});
        this.setState({serv_id: this.state.servicios[index].id});
        this.setState({serv_id_cliente: this.state.servicios[index].id_cliente});
    }



    render() {
        return (
            
            <section>
             <Clientes />   
             <form name="formDirecciones" onSubmit={this.handlerSubmitDirecciones}>
                <div className="panel" style={this.state.nueva_direccion && !this.state.nuevo_cliente ? {display:"flex"} : {display:"none"}}>
             
                <h4 className="formulario-titulo">Direcciones<hr/></h4>
                       
                        <div className="form-item" >
                            <label htmlFor="tipo_domicilio">Tipo de domicilio : </label>
                            <select name="tipo_domicilio" id="tipo_domicilio"
                            onChange={ e => this.setState({dir_tipo_domicilio:e.target.value})} 
                            value={this.state.dir_tipo_domicilio}>
                                <option value=''>- Seleccione el tipo de domicilio - </option>
                                <option value='HABITUAL'>Habitual</option>
                                <option value='SEG_DOM'>Segunda residencia</option>
                                <option value='FACT'>Facturación</option>
                                <option value='TRABAJO'>Trabajo</option>
                            </select>
                        </div>

                        <div className="form-item">
                            <label htmlFor="tipo_via">Tipo de Vía : </label>
                            <select name="tipo_via" id="tipo_via"
                            onChange={ e => this.setState({dir_tipo_via:e.target.value})} 
                            value={this.state.dir_tipo_via} >
                                <option value=''>- Seleccione el tipo de Vía - </option>
                                <option value='CALLE'>Calle</option>
                                <option value='PLAZA'>Plaza</option>
                                <option value='CTRA'>Carretera</option>
                                <option value='AVD'>Avenida</option>
                            </select>
                        </div>
                        
                       

                        <div className="form-item">
                            <label htmlFor="numero">Número : </label>
                            <input name="numero" size="5" id="numero" type="text"
                            value={this.state.dir_numero} onChange={ e => this.setState({dir_numero:e.target.value})} />
                        </div>

                        <div className="form-item">
                            <label htmlFor="puerta">Puerta : </label>
                            <input name="puerta" size="5" id="puerta" type="text"
                             value={this.state.dir_puerta} onChange={ e => this.setState({dir_puerta:e.target.value})}/>
                        </div>

                        <div className="form-item">
                            <label htmlFor="piso">Piso : </label>
                            <input name="piso" size="5" id="piso" type="text" 
                             value={this.state.dir_piso} onChange={ e => this.setState({dir_piso:e.target.value})}/>
                        </div>

                        <div className="form-item">
                            <label htmlFor="provincia">Provincia : </label>
                            <input name="provincia" size="30" id="provincia" type="text" 
                             value={this.state.dir_provincia} onChange={ e => this.setState({dir_provincia:e.target.value})}/>
                        </div>

                         <div className="form-item">
                            <label htmlFor="cp">Código postal : </label>
                            <input name="cp" size="5" id="cp" type="text" 
                             value={this.state.dir_cp} onChange={ e => this.setState({dir_cp:e.target.value})}/>
                        </div>
                        
                        <div className="form-item" style={{width:"100%"}}>
                            <label htmlFor="localidad">Localidad : </label>
                            <input name="localidad" size="80" id="localidad" type="text" 
                            value={this.state.dir_localidad} onChange={ e => this.setState({dir_localidad:e.target.value})}/> 
                        </div>


                        <div className="form-item" style={{width:"100%"}}>
                            <label htmlFor="direccion">Direccion : </label>
                            <input name="direccion" size="80" id="direccion" type="text" 
                             value={this.state.dir_direccion} onChange={ e => this.setState({dir_direccion:e.target.value})}/>
                        </div>
                        <input id="id" name="id" type="hidden" value={this.state.dir_id}/>
                        <input id="id_cliente" name="id_cliente" type="hidden" value={this.state.id_cliente}/>
                        <div className="formulario-tabla">
                            
                            <button type="submit">Guardar</button>
                            <button type="button" onClick={() => this.setState({nueva_direccion:false})}>Cancelar</button>
                        </div>
                </div>   
            </form>
                
                 <div className="panel" style={this.state.nueva_direccion || this.state.nuevo_cliente ? {display:"none"} : {display:"flex"}}>
                    
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Tipo de domicilio</th>
                                <th>Tipo de vía</th>
                                <th>Dirección</th>
                                <th>Número</th>
                                <th>Puerta</th>
                                <th>Piso</th>
                                <th>Provincia</th>
                                <th>Localidad</th>
                                <th>Código Postal</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.direcciones.map((item,index )=>(
                            <tr key = {index}>
                                <td className="listado-enlace"><a href="#" title="editar" onClick={() => this.editDireccion(index)}>{item.id}</a></td>
                                <td>{item.tipo_domicilio}</td>
                                <td>{item.tipo_via}</td>
                                <td>{item.direccion}</td>
                                <td>{item.numero}</td>
                                <td>{item.puerta}</td>
                                <td>{item.piso}</td>
                                <td>{item.provincia}</td>
                                <td>{item.localidad}</td>
                                <td>{item.cp}</td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                        <div className="formulario-tabla">
                            <button onClick={() => this.setState({nueva_direccion:true})}>Nueva dirección</button>
                        </div>
                </div>
                
                <form name="formServicios" onSubmit={this.handlerSubmitServicios}>
                <div className="panel" style={this.state.nuevo_servicio && !this.state.nuevo_cliente ? {display:"flex"} : {display:"none"}}>
               
                <h4 className="formulario-titulo">Servicios<hr/></h4>
                    
                    <div className="form-item">
                            <label htmlFor="tratamiento">Tratamiento : </label>
                            <select name="tratamiento" id="tratamiento" onChange={ e => this.setState({serv_tratamiento:e.target.value})} value={this.state.serv_tratamiento}>
                                <option value=''>- Seleccione el tratamiento - </option>
                                <option value='EYACULACION_PRECOZ'>EYACULACION PRECOZ</option>
                                <option value='CURVATURA_PENE'>CURVATURA PENE</option>
                                <option value='DISFUNCION_ERECTIL'>DISFUNCION ERECTIL</option>
                                <option value='FALTA_DESEO'>FALTA DE DESEO</option>
                                <option value='ENFERMEDADES_TRANSMISION'>ENFERMEDADES DE TRANSMISION</option>
                                <option value='OTROS_TRATAMIENTOS'>OTROS TRATAMIENTOS</option>
                            </select>
                    </div>

                        <textarea name="info_tratamiento" id="info_tratamiento"
                         value={this.state.serv_info_tratamiento} onChange={ e => this.setState({serv_info_tratamiento:e.target.value})}>
                        </textarea>

                    <div className="form-item">
                        <label htmlFor="fecha_inicio_tratamiento">Fecha inicio tratamiento :</label>
                        <input name="fecha_inicio_tratamiento"  id="fecha_inicio_tratamiento" type="date" 
                        value={Util.fromdateJavaToDate (this.state.serv_fecha_inicio_tratamiento)} onChange={ e => this.setState({serv_fecha_inicio_tratamiento:e.target.value})} />
                    </div>    

                    <div className="form-item">
                        <label htmlFor="fecha_fin_tratamiento">Fecha fin tratamiento :</label>
                        <input name="fecha_fin_tratamiento"  id="fecha_fin_tratamiento" type="date" 
                        value={Util.fromdateJavaToDate (this.state.serv_fecha_fin_tratamiento)} onChange={ e => this.setState({serv_fecha_fin_tratamiento:e.target.value})} />
                    </div>

                        <input id="id" name="id" type="hidden" value={this.state.serv_id}/>
                        <input id="id_cliente" name="id_cliente" type="hidden" value={this.state.id_cliente}/>
                        <div className="formulario-tabla">
                            <button type="submit" >Guardar</button> 
                            <button type="button" onClick={() =>this.setState({nuevo_servicio:false})}>Cancelar</button> 
                            </div>
                  </div>
                </form>
                    
                
                <div className="panel" style={this.state.nuevo_servicio || this.state.nuevo_cliente ? {display:"none"} : {display:"flex"}}>
                   
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Tratamiento</th>
                                <th>Observaciones tratamiento</th>
                                <th>Fecha inicio de tratamiento</th>
                                <th>Fecha fin de tratamiento</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.servicios.map((item, index)=>(
                            <tr key = {index}>
                                <td className="listado-enlace"><a href="#" onClick={ () => this.editServicio(index)} >{item.id}</a></td>
                                <td>{item.tratamiento}  </td>
                                <td>{item.info_tratamiento}</td>
                                <td>{Util.fromdateJavaToJS(item.fecha_inicio_tratamiento)}</td>
                                <td>{Util.fromdateJavaToJS(item.fecha_fin_tratamiento)} </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                        <div className="formulario-tabla">
                            <button onClick={() =>this.setState({nuevo_servicio:true})}>Nuevo servicio</button>
                        </div>
                    </div>
        </section>
            
        )
    }
}
