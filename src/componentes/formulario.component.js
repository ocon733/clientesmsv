import React, { Component } from 'react';
import './formulario.css';

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
            /*
            {
            id:null,
            direccion: "",
            tipo_via: "",
            numero: "",
            puerta: "",
            piso: "",
            provincia: "",
            localidad:"",
            cp:"",
            tipo_domicilio:""
        }],
        */
        servicios:[]
            /*
            {
            id:null,
            presupuesto:null,
            info_presupuesto:null,
            solicitud_informacion:"",
            info_solicitud_informacion:"",
            contratacion_servicio:null,
            eyaculacion_precoz:null,
            info_eyaculacion_precoz:"",
            curvatura_pene:null,
            info_curvatura_pene:null,
            disfuncion_erectil:null,
            info_disfuncion_erectil:"",
            falta_deseo:null,
            info_falta_deseo:null,
            enfermedades_transmision:null,
            info_enfermedades_transmision:null
            */

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
                    debugger
                   
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

                }

            })
        }
    }

    fromdateJavaToDate = (date) =>{
        
        if  ( date !== ""){
            let fecha = new Date(date);
            let dia =  fecha.getDate().toString();
            if ( dia.length === 1){  dia = "0" + dia; }
            let mes = (fecha.getMonth()+1).toString();
            if ( mes.length === 1){  mes = "0" + mes; }
            let txt = fecha.getFullYear()+ "-" + mes + "-" + dia;
            return txt;
        }else {
            return "";
        }
    }

    handlerSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                 <section>
                <div className="panel">
         
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
                        <label htmlFor="tipodoi">Tipo de DOI : </label>
                        <select name="tipodoi" id="tipodoi" onChange={ e => this.setState({tipodoi:e.target.value})} value={this.state.tipodoi}>
                            <option value=''>- Seleccione el tipo de documento</option>
                            <option value='nif'>N.I.F.</option>
                            <option value='nie'>N.I.E.</option>
                            <option value='cif'>C.I.F.</option>
                        </select>
                    </div>

                    <div className="form-item">
                        <label htmlFor="doi">D.O.I. : </label>
                        <input name="doi" size="5"  id="doi" type="text" 
                        value={this.state.doi} onChange={ e => this.setState({doi:e.target.value})} />
                    </div>

                    <div className="form-item">
                        <label htmlFor="fechanacimiento">Fecha nacimiento :</label>
                        <input name="fecha_nacimiento"  id="fecha_nacimiento" type="date" 
                        value={this.fromdateJavaToDate (this.state.fecha_nacimiento)} onChange={ e => this.setState({fecha_nacimiento:e.target.value})} />
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
                    <div style={{display:"none"}}>
                        <label htmlFor="direccion">Dirección : </label>
                        <input name="nombre" size="120" id="direccion" type="text" />
                    </div>
                    <div>
                    <h4>Direcciones<hr/></h4>
                    <table>
                        <thead>
                            <tr>
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
                        {this.state.direcciones.map(item=>(
                            <tr key = {item.id}>
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

                    </div>
                </div>    
                <div className="panel">
                <div style={{display:"none"}}>
                    <label htmlFor="presupuesto">Presupuesto : </label>
                    <input name="presupuesto" id="presupuesto" type="checkbox"  />
                </div>
                <div>
                    <h4>Servicios<hr/></h4>
                    <table>
                        <thead>
                            <tr>
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
                        {this.state.servicios.map(item=>(
                            <tr key = {item.id}>
                                <td>{item.presupuesto} - {item.info_presupuesto}  </td>
                                <td>{item.solicitud_informacion} - {item.info_solicitud_informacion}</td>
                                <td>{item.contratacion} - {item.info_contratacion}</td>
                                <td>{item.eyaculacion_precoz} - {item.info_eyaculacion_precoz}</td>
                                <td>{item.curvatura_pene} - {item.info_curvatura_pene}</td>
                                <td>{item.disfuncion_erectil} - {item.info_disfuncion_erectil}</td>
                                <td>{item.falta_deseo} - {item.info_falta_deseo}</td>
                                <td>{item.enfermedades_transmision} - {item.info_enfermedades_transmision}</td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                        </div>
                    </div>
                </section>
            </form>
            
        )
    }
}
