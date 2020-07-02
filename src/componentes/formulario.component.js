import React, { Component } from 'react';
import './formulario.css';
import Util from '../util_fechas.js';

export default class Formulario extends Component {

    constructor(props){
        super(props);
       this.state = {
        id : 0,
        nombre : "",
        fecha_alta: null,
        fecha_baja: null,
        apellido1: "",
        apellido2: "",
        fecha_nacimiento: "",
        sexo: "",
        doi: "",
        tipo_doi: "",
        tlf_contacto: "",
        tlf_trabajo: "",
        tlf_casa_:"",
        tlf_otro: "",
        email_contacto: "",
        email_trabajo:"",
        email_particular:"",
        cuenta_bancaria:"",
        observaciones:"",
        direcciones:[],
        servicios:[],
        nueva_direccion:true,
        nuevo_servicio:true,

        dir_tipo_via:"",
        dir_direccion:"",
        dir_numero:"",
        dir_puerta:"",
        dir_piso:"",
        dir_provincia:"",
        dir_localidad:"",
        dir_cp:"",
        dir_tipo_domicilio:"",

        serv_presupuesto:false,
        serv_info_presupuesto:"",
        serv_solicitud_informacion:false,
        serv_info_solicitud_informacion:"",
        serv_contratacion_servicio:false,
        serv_info_contratacion_servicio:"",
        serv_eyaculacion_precoz:false,
        serv_info_eyaculacion_precoz:"",
        serv_curvatura_pene:false,
        serv_info_curvatura_pene:"",
        serv_disfuncion_erectil:false,
        serv_info_disfuncion_erectil:"",
        serv_falta_deseo:false,
        serv_info_falta_deseo:"",
        serv_enfermedades_transmision:false,
        serv_info_enfermedades_transmision:""
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
                    
                   
                    this.setState({id:res.id_cliente});
                    this.setState({fecha_alta:res.fecha_alta});
                    this.setState({fecha_baja:res.fecha_baja});
                    this.setState({nombre:res.nombre});
                    this.setState({apellido1:res.apellido1});
                    this.setState({apellido2:res.apellido2});
                    this.setState({fecha_nacimiento:res.fecha_nacimiento});
                    this.setState({sexo:res.sexo});
                    this.setState({doi:res.doi});
                    this.setState({tipo_doi:res.tipo_doi});
                    this.setState({tlf_contacto:res.tlf_contacto});
                    this.setState({tlf_trabajo:res.tlf_trabajo});
                    this.setState({tlf_casa_:res.tlf_casa});
                    this.setState({tlf_otro:res.tlf_otro});
                    this.setState({email_contacto:res.email_contacto});
                    this.setState({email_trabajo:res.email_trabajo});
                    this.setState({email_particular:res.email_particular});
                    this.setState({cuenta_bancaria:res.cuenta_bancaria});
                    this.setState({observaciones:res.observaciones});

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

                }

            })
        }
    }

    handlerSubmit = (e) => {
        e.preventDefault();
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
    }

    editServicio ( index) {
        debugger
        this.setState({nuevo_servicio:true});
        this.setState({serv_presupuesto:this.valueToBoolean(this.state.servicios[index].presupuesto)});
        this.setState({serv_info_presupuesto : this.state.servicios[index].info_presupuesto});
        this.setState({serv_solicitud_informacion:this.valueToBoolean(this.state.servicios[index].solicitud_informacion)});
        this.setState({serv_info_solicitud_informacion:this.state.servicios[index].info_solicitud_informacion});
        this.setState({serv_contratacion_servicio:this.valueToBoolean(this.state.servicios[index].contratacion_servicio)});
        this.setState({serv_info_contratacion_servicio:this.state.servicios[index].info_contratacion_servicio});
        this.setState({serv_eyaculacion_precoz:this.valueToBoolean(this.state.servicios[index].eyaculacion_precoz)});
        this.setState({serv_info_eyaculacion_precoz:this.state.servicios[index].info_eyaculacion_precoz});
        this.setState({serv_curvatura_pene:this.valueToBoolean(this.state.servicios[index].curvatura_pene)});
        this.setState({serv_info_curvatura_pene:this.state.servicios[index].info_curvatura_pene});
        this.setState({serv_disfuncion_erectil:this.valueToBoolean(this.state.servicios[index].disfuncion_erectil)});
        this.setState({serv_info_disfuncion_erectil:this.state.servicios[index].info_disfuncion_erectil});
        this.setState({serv_falta_deseo:this.valueToBoolean(this.state.servicios[index].falta_deseo)});
        this.setState({serv_info_falta_deseo:this.state.servicios[index].info_falta_deseo});
        this.setState({serv_enfermedades_transmision:this.valueToBoolean(this.state.servicios[index].enfermedades_transmision)});
        this.setState({serv_info_enfermedades_transmision:this.state.servicios[index].info_enfermedades_transmision});

    }

    valueToBoolean (valor){
        if ( valor === "S")
         {
             return true;
        }
        else if ( valor ==="N") {
             return false; 
        }else{
            return false;
        }
    }

    booleanToValue (valor){
        if ( valor) { return "S"; }
        else if ( valor === "S"){ return true; }
    }



    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                 <section>
                <div className="panel">
                <h4 className="formulario-titulo">Datos Cliente<hr/></h4>
                   <div className="form-item">
                        <label htmlFor="nombre">Nombre : </label>
                        <input name="nombre" size="30" required id="nombre" type="text" 
                        value={this.state.nombre} onChange={ e => this.setState({nombre:e.target.value})} />
                    </div>

                    <div className="form-item">
                        <label htmlFor="sexo">Sexo : </label>
                        <select name="sexo" id="sexo" onChange={ e => this.setState({sexo:e.target.value})} value={this.state.sexo}>
                            <option value=''>- Seleccione el sexo</option>
                            <option value='V'>Varón</option>
                            <option value='M'>Mujer</option>
                        </select>
                    </div>

                    <div className="form-item">
                        <label htmlFor="apellido1">Primer apellido : </label>
                        <input name="apellido1" size="30"  id="apellido1" type="text" 
                        value={this.state.apellido1} onChange={ e => this.setState({apellido1:e.target.value})} />
                    </div>
                    <div className="form-item">
                        <label htmlFor="apellido2">Segundo apellido : </label>
                        <input name="apellido2" size="30"  id="apellido2" type="text" 
                        value={this.state.apellido2} onChange={ e => this.setState({apellido2:e.target.value})} />
                    </div>
                    
                    <div className="form-item">
                        <label htmlFor="tipo_doi">Tipo de DOI : </label>
                        <select name="tipo_doi" id="tipo_doi" onChange={ e => this.setState({tipo_doi:e.target.value})} 
                        value={this.state.tipo_doi}>
                            <option value=''>- Seleccione el tipo de documento</option>
                            <option value='NIF'>N.I.F.</option>
                            <option value='NIE'>N.I.E.</option>
                            <option value='CIF'>C.I.F.</option>
                        </select>
                    </div>

                    <div className="form-item">
                        <label htmlFor="doi">D.O.I. : </label>
                        <input name="doi" size="30"  id="doi" type="text" 
                        value={this.state.doi} onChange={ e => this.setState({doi:e.target.value})} />
                    </div>

                    <div className="form-item">
                        <label htmlFor="fechanacimiento">Fecha nacimiento :</label>
                        <input name="fecha_nacimiento"  id="fecha_nacimiento" type="date" 
                        value={Util.fromdateJavaToDate (this.state.fecha_nacimiento)} onChange={ e => this.setState({fecha_nacimiento:e.target.value})} />
                    </div>

                    <div className="form-item">
                        <label htmlFor="tlf_contacto">Tlf. contacto : </label>
                        <input name="tlf_contacto" size="30"  id="tlf_contacto" type="text" 
                        value={this.state.tlf_contacto} onChange={ e => this.setState({tlf_contacto:e.target.value})} />
                    </div>

                    <div className="form-item">
                        <label htmlFor="tlf_trabajo">Tlf. trabajo : </label>
                        <input name="tlf_trabajo" size="30"  id="tlf_trabajo" type="text" 
                        value={this.state.tlf_trabajo} onChange={ e => this.setState({tlf_trabajo:e.target.value})} />
                    </div>


                    <div className="form-item">
                        <label htmlFor="tlf_casa">Tlf. domicilio : </label>
                        <input name="tlf_casa" size="30"  id="tlf_casa" type="text" 
                        value={this.state.tlf_casa} onChange={ e => this.setState({tlf_casa:e.target.value})} />
                    </div>

                    <div className="form-item">
                        <label htmlFor="tlf_otro">Tlf. particular : </label>
                        <input name="tlf_otro" size="30"  id="tlf_otro" type="text" 
                        value={this.state.tlf_otro} onChange={ e => this.setState({tlf_otro:e.target.value})} />
                    </div>

                    <div className="form-item">
                        <label htmlFor="email_contacto">Email de contacto : </label>
                        <input name="email_contacto" size="30"  id="email_contacto" type="text" 
                        value={this.state.email_contacto} onChange={ e => this.setState({email_contacto:e.target.value})} />
                    </div>

                    <div className="form-item">
                        <label htmlFor="email_trabajo">Email del trabajo : </label>
                        <input name="email_trabajo" size="30"  id="email_trabajo" type="text" 
                        value={this.state.email_trabajo} onChange={ e => this.setState({email_trabajo:e.target.value})} />
                    </div>

                    <div className="form-item">
                        <label htmlFor="email_particular">Email particular : </label>
                        <input name="email_particular" size="30"  id="email_particular" type="text" 
                        value={this.state.email_particular} onChange={ e => this.setState({email_particular:e.target.value})} />
                    </div>

                    <div className="form-item">
                        <label htmlFor="cuenta_bancaria">Cuenta Bancaria : </label>
                        <input name="cuenta_bancaria" size="30"  id="cuenta_bancaria" type="text" 
                        value={this.state.cuenta_bancaria} onChange={ e => this.setState({cuenta_bancaria:e.target.value})} />
                    </div>

                    <div className="form-item">
                        <label htmlFor="observaciones">Observaciones : </label>
                        <textarea name="observaciones" id="observaciones" value={this.state.observaciones}
                       onChange={ e => this.setState({observaciones:e.target.value})}></textarea>
                    </div>

                </div>
                <div className="panel">
                <h4 className="formulario-titulo">Direcciones<hr/></h4>
                    <div className="formulario-tabla" style={this.state.nueva_direccion ? {display:"contents"} : {display:"none"}} >
                       
                        <div className="form-item">
                            <label htmlFor="tipodomicilio">Tipo de domicilio : </label>
                            <select name="tipodomicilio" id="tipodomicilio"
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
                            <label htmlFor="tipovia">Tipo de Vía : </label>
                            <select name="tipovia" id="tipovia"
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

                    </div>
                    <div className="formulario-tabla" style={this.state.nueva_direccion ? {display:"none"} : {display:"block"}}>
                    
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
                        {this.state.direcciones.map((item, index)=>(
                            <tr key = {item.id}>
                                <td className="listado-enlace"><a title="editar" onClick={() => this.editDireccion(index)}>{item.id}</a></td>
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
                        <button onClick={() => this.setState({nueva_direccion:true})}>Nueva dirección</button> 
                    </div>
                </div>    
                <div className="panel">
                <h4 className="formulario-titulo">Servicios<hr/></h4>
                    <div className="formulario-tabla" style={this.state.nuevo_servicio ? {display:"contents"} : {display:"none"}}>
                  
                    <div className="form-item">
                            <label htmlFor="solicitud_informacion"> Solicitud de información : </label>
                            <input name="solicitud_informacion" id="solicitud_informacion" type="checkbox" 
                            defaultChecked={this.state.serv_solicitud_informacion} onChange={ e => this.setState({serv_solicitud_informacion:e.target.value})}/> 
                    </div>
                    
                        <textarea name="info_solicitud_informacion" id="info_solicitud_informacion"
                            value={this.state.serv_info_solicitud_informacion} onChange={ e => this.setState({serv_info_solicitud_informacion:e.target.value})}> 
                         </textarea>
                   

                    <div className="form-item">
                            <label htmlFor="contratacion_servicio"> Contratación servicio : </label>
                            <input name="contratacion_servicio" id="contratacion_servicio" type="checkbox" 
                            defaultChecked={this.state.serv_contratacion_servicio} onChange={ e => this.setState({serv_contratacion_servicio:e.target.value})}/> 

                    </div>
                    
                        <textarea name="info_contratacion_servicio" id="info_contratacion_servicio"
                        value={this.state.serv_info_contratacion_servicio} onChange={ e => this.setState({serv_info_contratacion_servicio:e.target.value})}>
                        </textarea>
                  

                    <div className="form-item">
                            <label htmlFor="eyaculacion_precoz"> Eyaculación precoz : </label>
                            <input name="eyaculacion_precoz" id="eyaculacion_precoz" type="checkbox" 
                            defaultChecked={this.state.serv_eyaculacion_precoz} onChange={ e => this.setState({serv_eyaculacion_precoz:e.target.value})}/> 

                    </div>
                    
                        <textarea name="info_eyaculacion_precoz" id="info_eyaculacion_precoz"
                        value={this.state.serv_info_eyaculacion_precoz} onChange={ e => this.setState({serv_info_eyaculacion_precoz:e.target.value})}>
                             </textarea>
                 

                    <div className="form-item">
                            <label htmlFor="curvatura_pene"> Curvatura del pene : </label>
                            <input name="curvatura_pene" id="curvatura_pene" type="checkbox" 
                             defaultChecked={this.state.serv_curvatura_pene} onChange={ e => this.setState({serv_curvatura_pene:e.target.value})}/> 

                    </div>
                   
                        <textarea name="info_curvatura_pene" id="info_curvatura_pene"
                         value={this.state.serv_info_curvatura_pene} onChange={ e => this.setState({serv_info_curvatura_pene:e.target.value})}>
                        </textarea>
                  

                    <div className="form-item">
                            <label htmlFor="disfuncion_erectil"> Disfunción eréctil : </label>
                            <input name="disfuncion_erectil" id="disfuncion_erectil" type="checkbox" 
                             defaultChecked={this.state.serv_disfuncion_erectil} onChange={ e => this.setState({serv_disfuncion_erectil:e.target.value})}/> 

                    </div>
                    
                        <textarea name="info_disfuncion_erectil" id="info_disfuncion_erectil"
                        value={this.state.serv_info_disfuncion_erectil} onChange={ e => this.setState({serv_info_disfuncion_erectil:e.target.value})}>
                         </textarea>
                   

                    <div className="form-item">
                            <label htmlFor="falta_deseo"> Falta de deseo : </label>
                            <input name="falta_deseo" id="falta_deseo" type="checkbox" 
                            defaultChecked={this.state.serv_falta_deseo} onChange={ e => this.setState({serv_falta_deseo:e.target.value})}/>

                    </div>
                    
                        <textarea name="info_falta_deseo" id="info_falta_deseo"
                         value={this.state.serv_info_falta_deseo} onChange={ e => this.setState({serv_info_falta_deseo:e.target.value})}>
                        </textarea>
                    

                    <div className="form-item">
                            <label htmlFor="enfermedades_transmision"> Enfermedades de transmisión : </label>
                            <input name="enfermedades_transmision" id="enfermedades_transmision" type="checkbox" 
                            defaultChecked={this.state.enfermedades_transmision} onChange={ e => this.setState({serv_enfermedades_transmision:e.target.value})}/>

                    </div>
                   
                        <textarea name="info_enfermedades_transmision" id="info_enfermedades_transmision"
                         value={this.state.serv_info_enfermedades_transmision} onChange={ e => this.setState({serv_info_enfermedades_transmision:e.target.value})}>
                        </textarea>
    
                    
                </div>
                <div className="formulario-tabla" style={this.state.nuevo_servicio ? {display:"none"} : {display:"contents"}}>
                   
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Presupuesto</th>
                                <th>Solicitud informacion</th>
                                <th>Contratación</th>
                                <th>Eyaculación precoz</th>
                                <th>Curvatura pene</th>
                                <th>Disfunción eréctil</th>
                                <th>Falta de deseo</th>
                                <th>Enfermedades de transmisión</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.servicios.map((item, index)=>(
                            <tr key = {item.id}>
                                <td className="listado-enlace"><a onClick={ () => this.editServicio(index)} >{item.id}</a></td>
                                <td>({item.presupuesto})  {item.info_presupuesto}  </td>
                                <td>({item.solicitud_informacion})  {item.info_solicitud_informacion}</td>
                                <td>({item.contratacion_servicio})  {item.info_contratacion_servicio}</td>
                                <td>({item.eyaculacion_precoz})  {item.info_eyaculacion_precoz}</td>
                                <td>({item.curvatura_pene})  {item.info_curvatura_pene}</td>
                                <td>({item.disfuncion_erectil})  {item.info_disfuncion_erectil}</td>
                                <td>({item.falta_deseo})  {item.info_falta_deseo}</td>
                                <td>({item.enfermedades_transmision})  {item.info_enfermedades_transmision}</td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                        <button onClick={() =>this.setState({nuevo_servicio:true})}>Nuevo servicio</button>
                        </div>
                    </div>
                </section>
            </form>
            
        )
    }
}
