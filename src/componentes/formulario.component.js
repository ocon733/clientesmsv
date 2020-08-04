import React, { Component } from 'react';
import './formulario.css';
import Util from '../util_fechas.js';

export default class Formulario extends Component {

    constructor(props){
        super(props);
       this.state = {
        id_cliente : null,
        nombre : "",
        fecha_alta: "",
        fecha_baja: "",
        apellido1: "",
        apellido2: "",
        fecha_nacimiento: "",
        sexo: "",
        doi: "",
        tipo_doi: "",
        tlf_contacto: "",
        tlf_trabajo: "",
        tlf_casa:"",
        tlf_otro: "",
        email_contacto: "",
        email_trabajo:"",
        email_particular:"",
        cuenta_bancaria:"",
        observaciones:"",
        presupuesto:false,
        info_presupuesto:"",
        solicitud_informacion:false,
        info_solicitud_informacion:"",
        contratacion_servicio:false,
        info_contratacion_servicio:"",
        eyaculacion_precoz:false,
        info_eyaculacion_precoz:"",
        curvatura_pene:false,
        info_curvatura_pene:"",
        disfuncion_erectil:false,
        info_disfuncion_erectil:"",
        falta_deseo:false,
        info_falta_deseo:"",
        enfermedades_transmision:false,
        info_enfermedades_transmision:"",

        direcciones:[],
        servicios:[],
        nueva_direccion:true,
        nuevo_servicio:true,
        nuevo_cliente:true,

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
                    
                   
                    this.setState({id_cliente:res.id_cliente});
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
                    this.setState({tlf_casa:res.tlf_casa});
                    this.setState({tlf_otro:res.tlf_otro});
                    this.setState({email_contacto:res.email_contacto});
                    this.setState({email_trabajo:res.email_trabajo});
                    this.setState({email_particular:res.email_particular});
                    this.setState({cuenta_bancaria:res.cuenta_bancaria});
                    this.setState({observaciones:res.observaciones});

               
                    this.setState({presupuesto:this.valueToBoolean(res.presupuesto)});
                    this.setState({info_presupuesto : res.info_presupuesto});
                    this.setState({solicitud_informacion:this.valueToBoolean(res.solicitud_informacion)});
                    this.setState({info_solicitud_informacion:res.info_solicitud_informacion});
                    this.setState({contratacion_servicio:this.valueToBoolean(res.contratacion_servicio)});
                    this.setState({info_contratacion_servicio:res.info_contratacion_servicio});
                    this.setState({eyaculacion_precoz:this.valueToBoolean(res.eyaculacion_precoz)});
                    this.setState({info_eyaculacion_precoz:res.info_eyaculacion_precoz});
                    this.setState({curvatura_pene:this.valueToBoolean(res.curvatura_pene)});
                    this.setState({info_curvatura_pene:res.info_curvatura_pene});
                    this.setState({disfuncion_erectil:this.valueToBoolean(res.disfuncion_erectil)});
                    this.setState({info_disfuncion_erectil:res.info_disfuncion_erectil});
                    this.setState({falta_deseo:this.valueToBoolean(res.falta_deseo)});
                    this.setState({info_falta_deseo:res.info_falta_deseo});
                    this.setState({enfermedades_transmision:this.valueToBoolean(res.enfermedades_transmision)});
                    this.setState({info_enfermedades_transmision:res.info_enfermedades_transmision});


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

    handlerSubmitClientes = (e) => {
        
        e.preventDefault();
        const data = new FormData ( e.target);
        fetch("http://localhost:8081/nuevocliente", {
            method: 'POST', 
            body: data         
        })
        .then(res=> res.json())
        .then(res => {
           window.location.href ="/cliente/"+ res;
        })
        .catch(error => console.error('Error:', error))
        .then(response => alert('Guardado correctamente '));

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

    valueToBoolean (valor){
        if ( valor === "S")
         {
             return true;
        }else{
            return false;
        }
    }

    booleanToValue (valor){
        
        if ( valor) { return "S"; }
        else { return "N"; }
    }



    render() {
        return (
            
            <section>
            <form id="formClientes" name="formClientes" onSubmit={this.handlerSubmitClientes}>
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

                   
                        
                        <textarea name="observaciones" id="observaciones" value={this.state.observaciones}
                       onChange={ e => this.setState({observaciones:e.target.value})} placeholder="Observaciones al cliente"></textarea>
                    
                    
                    <div className="form-item">
                            <label htmlFor="solicitud_informacion"> Solicitud de información : </label>
                            <input name="solicitud_informacion" id="solicitud_informacion" type="checkbox" 
                            checked={this.state.solicitud_informacion} 
                            onChange={ e => this.setState({solicitud_informacion: !this.state.solicitud_informacion})}
                            value={this.booleanToValue(this.state.solicitud_informacion)}/> 
                    </div>
                    
                        <textarea name="info_solicitud_informacion" id="info_solicitud_informacion"
                            value={this.state.info_solicitud_informacion} onChange={ e => this.setState({info_solicitud_informacion:e.target.value})}> 
                         </textarea>


                    <div className="form-item">
                            <label htmlFor="presupuesto"> Solicitud de presupuesto : </label>
                            <input name="presupuesto" id="presupuesto" type="checkbox" 
                            checked={this.state.presupuesto} 
                            onChange={ () => this.setState({presupuesto: !this.state.presupuesto})}
                            value={this.booleanToValue(this.state.presupuesto)}/> 
                    </div>
                    
                        <textarea name="info_presupuesto" id="info_presupuesto"
                            value={this.state.info_presupuesto} onChange={ e => this.setState({info_presupuesto:e.target.value})}> 
                         </textarea>     
                   

                    <div className="form-item">
                            <label htmlFor="contratacion_servicio"> Contratación servicio : </label>
                            <input name="contratacion_servicio" id="contratacion_servicio" type="checkbox" 
                            checked={this.state.contratacion_servicio} 
                            onChange={ () => this.setState({contratacion_servicio:!this.state.contratacion_servicio})}
                            value={this.booleanToValue(this.state.contratacion_servicio)}/> 

                    </div>
                    
                        <textarea name="info_contratacion_servicio" id="info_contratacion_servicio"
                        value={this.state.info_contratacion_servicio} onChange={ e => this.setState({info_contratacion_servicio:e.target.value})}>
                        </textarea>
                  

                    <div className="form-item">
                            <label htmlFor="eyaculacion_precoz"> Eyaculación precoz : </label>
                            <input name="eyaculacion_precoz" id="eyaculacion_precoz" type="checkbox" 
                            checked={this.state.eyaculacion_precoz} 
                            onChange={ () => this.setState({eyaculacion_precoz:!this.state.eyaculacion_precoz})}
                            value={this.booleanToValue(this.state.eyaculacion_precoz)}/> 

                    </div>
                    
                        <textarea name="info_eyaculacion_precoz" id="info_eyaculacion_precoz"
                        value={this.state.info_eyaculacion_precoz} onChange={ e => this.setState({info_eyaculacion_precoz:e.target.value})}>
                             </textarea>
                 

                    <div className="form-item">
                            <label htmlFor="curvatura_pene"> Curvatura del pene : </label>
                            <input name="curvatura_pene" id="curvatura_pene" type="checkbox" 
                             checked={this.state.curvatura_pene} 
                             onChange={ () => this.setState({curvatura_pene:!this.state.curvatura_pene})}
                             value={this.booleanToValue(this.state.curvatura_pene)}/>

                    </div>
                   
                        <textarea name="info_curvatura_pene" id="info_curvatura_pene"
                         value={this.state.info_curvatura_pene} onChange={ e => this.setState({info_curvatura_pene:e.target.value})}>
                        </textarea>
                  

                    <div className="form-item">
                            <label htmlFor="disfuncion_erectil"> Disfunción eréctil : </label>
                            <input name="disfuncion_erectil" id="disfuncion_erectil" type="checkbox" 
                             checked={this.state.disfuncion_erectil} 
                             onChange={ () => this.setState({disfuncion_erectil:!this.state.disfuncion_erectil})}
                             value={this.booleanToValue(this.state.disfuncion_erectil)}/> 

                    </div>
                    
                        <textarea name="info_disfuncion_erectil" id="info_disfuncion_erectil"
                        value={this.state.info_disfuncion_erectil} onChange={ e => this.setState({info_disfuncion_erectil:e.target.value})}>
                         </textarea>
                   

                    <div className="form-item">
                            <label htmlFor="falta_deseo"> Falta de deseo : </label>
                            <input name="falta_deseo" id="falta_deseo" type="checkbox" 
                            checked={this.state.falta_deseo} 
                            onChange={ () => this.setState({falta_deseo: !this.state.falta_deseo})}
                            value={this.booleanToValue(this.state.falta_deseo)}/>

                    </div>
                    
                        <textarea name="info_falta_deseo" id="info_falta_deseo"
                         value={this.state.info_falta_deseo} onChange={ e => this.setState({info_falta_deseo:e.target.value})}>
                        </textarea>
                    

                    <div className="form-item">
                            <label htmlFor="enfermedades_transmision"> Enfermedades de transmisión : </label>
                            <input name="enfermedades_transmision" id="enfermedades_transmision" type="checkbox" 
                            checked={this.state.enfermedades_transmision} 
                            onChange={ () => this.setState({enfermedades_transmision: !this.state.enfermedades_transmision})}
                            value={this.state.enfermedades_transmision ? "S" : "N"}/>

                    </div>
                   
                        <textarea name="info_enfermedades_transmision" id="info_enfermedades_transmision"
                         value={this.state.info_enfermedades_transmision} onChange={ e => this.setState({info_enfermedades_transmision:e.target.value})}>
                        </textarea>



                    <input id="id_cliente" name="id_cliente" type="hidden" value={this.state.id_cliente}/>
                    <input id="fecha_alta" name="fecha_alta" type="hidden" value={Util.hoyToJava()}/>

                    <button type="submit">Guardar</button>

              </div>       
             </form>
           
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
