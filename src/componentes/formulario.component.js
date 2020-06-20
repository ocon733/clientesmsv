import React, { Component } from 'react';
import './formulario.css';

export default class Formulario extends Component {

    state = {
        id : null,
        nombre : "",
        fecha_alta: null,
        fecha_baja: null,
        apellido1: "",
        apellido2: "",
        fecha_nacimiento: null,
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
        direcciones: [],
        servicios:[]

        /*
        direcciones: [{
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

        servicios:[{
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
        }]

        */


    }

    componentDidMount = () => {        
        if ( this.props.match.params.id !== undefined){
            fetch("http://localhost:8081/cliente/" + this.props.match.params.id )
            .then(res=> res.json())
            .then(res => {
               let cli = res[0];
               this.setState({id:cli[0]});
               this.setState({fecha_alta:cli[2]});
               this.setState({fecha_baja:cli[3]});
               this.setState({nombre:cli[4]});
               this.setState({apellido1:cli[5]});
               this.setState({apellido2:cli[6]});
               this.setState({fecha_nacimiento:cli[7]});
               this.setState({sexo:cli[8]});
               this.setState({doi:cli[9]});
               this.setState({tipo_doi:cli[10]});
               this.setState({tlf_contacto:cli[11]});
               this.setState({tlf_trabajo:cli[12]});
               this.setState({tlf_casa_:cli[13]});
               this.setState({tlf_otro:cli[14]});
               this.setState({email_contacto:cli[15]});
               this.setState({email_trabajo:cli[16]});
               this.setState({email_particular:cli[17]});
               this.setState({cuenta_bancaria:cli[18]});
               this.setState({observaciones:cli[19]});
            });

/*
            fetch("http://localhost:8081/dir/" + this.props.match.params.id )
            .then(res=> res.json())
            .then(res => {
               this.setState({direcciones:res});
            });

            fetch("http://localhost:8081/serv/" + this.props.match.params.id )
            .then(res=> res.json())
            .then(res => {
                this.setState({servicios: res});
            });

*/
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
                        <input name="fechanacimiento"  id="fechanacimiento" type="date" 
                        value={this.state.fechanacimiento} onChange={ e => this.setState({fechanacimiento:e.target.value})} />
                    </div>

                    <div className="form-item">
                        <label htmlFor="tlfcontacto">Tlf. contacto : </label>
                        <input name="tlfcontacto" size="30"  id="tlfcontacto" type="text" 
                        value={this.state.tlfcontacto} onChange={ e => this.setState({tlfcontacto:e.target.value})} />
                    </div>

                    <div className="form-item">
                        <label htmlFor="tlftrabajo">Tlf. trabajo : </label>
                        <input name="tlftrabajo" size="30"  id="tlftrabajo" type="text" 
                        value={this.state.tlftrabajo} onChange={ e => this.setState({tlftrabajo:e.target.value})} />
                    </div>

                    <div className="form-item">
                        <label htmlFor="tlfcasa">Tlf. domicilio : </label>
                        <input name="tlfcasa" size="30"  id="tlfcasa" type="text" 
                        value={this.state.tlfcasa} onChange={ e => this.setState({tlfcasa:e.target.value})} />
                    </div>

                    <div className="form-item">
                        <label htmlFor="tlfcasa">Tlf. domicilio : </label>
                        <input name="tlfcasa" size="30"  id="tlfcasa" type="text" 
                        value={this.state.tlfcasa} onChange={ e => this.setState({tlfcasa:e.target.value})} />
                    </div>

                    <div className="form-item">
                        <label htmlFor="tlfotro">Tlf. particular : </label>
                        <input name="tlfotro" size="30"  id="tlfotro" type="text" 
                        value={this.state.tlfotro} onChange={ e => this.setState({tlfotro:e.target.value})} />
                    </div>

                    <div className="form-item">
                        <label htmlFor="emailcontacto">Email de contacto : </label>
                        <input name="emailcontacto" size="30"  id="emailcontacto" type="text" 
                        value={this.state.emailcontacto} onChange={ e => this.setState({emailcontacto:e.target.value})} />
                    </div>

                    <div className="form-item">
                        <label htmlFor="emailtrabajo">Email del trabajo : </label>
                        <input name="emailtrabajo" size="30"  id="emailtrabajo" type="text" 
                        value={this.state.emailtrabajo} onChange={ e => this.setState({emailtrabajo:e.target.value})} />
                    </div>

                    <div className="form-item">
                        <label htmlFor="emailparticular">Email particular : </label>
                        <input name="emailparticular" size="30"  id="emailparticular" type="text" 
                        value={this.state.emailparticular} onChange={ e => this.setState({emailparticular:e.target.value})} />
                    </div>

                    <div className="form-item">
                        <label htmlFor="cuentabancaria">Cuenta Bancaria : </label>
                        <input name="cuentabancaria" size="30"  id="cuentabancaria" type="text" 
                        value={this.state.cuentabancaria} onChange={ e => this.setState({cuentabancaria:e.target.value})} />
                    </div>

                    <div className="form-item">
                        <label htmlFor="observaciones">Observaciones : </label>
                        <textarea name="observaciones" id="observaciones" 
                       onChange={ e => this.setState({observaciones:e.target.value})}>{this.state.observaciones}</textarea>
                    </div>








                </div>
                <div className="panel">
                    <label htmlFor="direccion">Dirección : </label>
                    <input name="nombre" size="120" id="direccion" type="text" />
                </div>
                <div className="panel">
                    <label htmlFor="presupuesto">Presupuesto : </label>
                    <input name="presupuesto" id="presupuesto" type="checkbox"  />
                </div>
                </section>
            </form>
            
        )
    }
}
