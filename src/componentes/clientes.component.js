import React, { useState, useEffect } from 'react';
import Util from '../util_fechas.js';
import { Paper, Grid, TextField, MenuItem, Select, FormControl, InputLabel, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import './clientes.css';

const Clientes = (props) => {

    const [cliente, setCliente] = useState({
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
        presupuesto:"N",
        info_presupuesto:"",
        solicitud_informacion:"N",
        info_solicitud_informacion:"",
        contratacion_servicio:"N",
        info_contratacion_servicio:"",
        eyaculacion_precoz:"N",
        info_eyaculacion_precoz:"",
        curvatura_pene:"N",
        info_curvatura_pene:"",
        disfuncion_erectil:"N",
        info_disfuncion_erectil:"",
        falta_deseo:"N",
        info_falta_deseo:"",
        enfermedades_transmision:"N",
        info_enfermedades_transmision:""
    });

 /* 
    useEffect ( () => {  
      
        //this.montado = true;     
        if ( props.match.params.id !== undefined){
            fetch("http://localhost:8081/cliente/" + props.match.params.id )
            .then(res=> res.json())
            .then(res => {
                
               // if ( this.montado){
                    
                   
                setCliente({ ...cliente, id_cliente:res.id_cliente});
                setCliente({ ...cliente, fecha_alta:res.fecha_alta});
                    setCliente({ ...cliente, fecha_baja:res.fecha_baja});
                    setCliente({ ...cliente, nombre:res.nombre});
                    setCliente({ ...cliente, apellido1:res.apellido1});
                    setCliente({ ...cliente, apellido2:res.apellido2});
                    setCliente({ ...cliente, fecha_nacimiento:res.fecha_nacimiento});
                    setCliente({ ...cliente, sexo:res.sexo});
                    setCliente({ ...cliente, doi:res.doi});
                    setCliente({ ...cliente, tipo_doi:res.tipo_doi});
                    setCliente({ ...cliente, tlf_contacto:res.tlf_contacto});
                    setCliente({ ...cliente, tlf_trabajo:res.tlf_trabajo});
                    setCliente({ ...cliente, tlf_casa:res.tlf_casa});
                    setCliente({ ...cliente, tlf_otro:res.tlf_otro});
                    setCliente({ ...cliente, email_contacto:res.email_contacto});
                    setCliente({ ...cliente, email_trabajo:res.email_trabajo});
                    setCliente({ ...cliente, email_particular:res.email_particular});
                    setCliente({ ...cliente, cuenta_bancaria:res.cuenta_bancaria});
                    setCliente({ ...cliente, observaciones:res.observaciones});

               
                    setCliente({ ...cliente, presupuesto:res.presupuesto});
                    setCliente({ ...cliente, info_presupuesto : res.info_presupuesto});
                    setCliente({ ...cliente, solicitud_informacion:res.solicitud_informacion});
                    setCliente({ ...cliente, info_solicitud_informacion:res.info_solicitud_informacion});
                    setCliente({ ...cliente, contratacion_servicio:res.contratacion_servicio});
                    setCliente({ ...cliente, info_contratacion_servicio:res.info_contratacion_servicio});
                    setCliente({ ...cliente, eyaculacion_precoz:res.eyaculacion_precoz});
                    setCliente({ ...cliente, info_eyaculacion_precoz:res.info_eyaculacion_precoz});
                    setCliente({ ...cliente, curvatura_pene:res.curvatura_pene});
                    setCliente({ ...cliente, info_curvatura_pene:res.info_curvatura_pene});
                    setCliente({ ...cliente, disfuncion_erectil:res.disfuncion_erectil});
                    setCliente({ ...cliente, info_disfuncion_erectil:res.info_disfuncion_erectil});
                    setCliente({ ...cliente, falta_deseo:res.falta_deseo});
                    setCliente({ ...cliente, info_falta_deseo:res.info_falta_deseo});
                    setCliente({ ...cliente, enfermedades_transmision:res.enfermedades_transmision});
                    setCliente({ ...cliente, info_enfermedades_transmision:res.info_enfermedades_transmision});


                    let dir = [];
                    for (let i = 0; i < res.direcciones.length; i++) {        
                        dir.push(res.direcciones[i]);
                    }
                    setCliente({direcciones:dir});

                    let serv = [];
                    for (let i = 0; i < res.servicios.length; i++) {
                        serv.push(res.servicios[i]);
                    }
                    setCliente({servicios:serv});

                    setCliente({nueva_direccion:false});
                    setCliente({nuevo_servicio:false});
                    setCliente({nuevo_cliente:false});

               // }

            })
        }
    },[]);
*/
    const handlerSubmitClientes = (e) => {
        
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

    const handlerCliente = e => { 
        setCliente({ ...cliente,  [e.target.name]:e.target.value    }) 
    }
    
    const handlerChecked = e => { 
        setCliente({ ...cliente,  [e.target.name]:e.target.checked    }) 
    }
    

    return (
        
            
            <form id="formClientes" name="formClientes" onSubmit={handlerSubmitClientes} style={{width:"100%"}}>
            <Paper elevation={3}>
             
                <h4 className="formulario-titulo">Datos Cliente<hr/></h4>

                <Grid container spacing={3} >

                    <Grid item xs={6}  className="columnaForm">
                        <TextField className="formItem" name="nombre" required   id="nombre" label="Nombre"
                                onChange={ handlerCliente} value={cliente.nombre} size="30"/>

                        <FormControl className="formItem">
                            <InputLabel id="label_sexo">Indicar el sexo</InputLabel>
                            <Select labelId="label_sexo" name="sexo"  id="sexo"
                                    onChange={handlerCliente} value={cliente.sexo}>
                                    <MenuItem value='V'>Varón</MenuItem>
                                    <MenuItem value='M'>Mujer</MenuItem>
                            </Select>
                       </FormControl> 

                       <TextField className="formItem" name="apellido2" id="apellido2" label="Segundo apellido"
                       value={cliente.apellido2} onChange={ handlerCliente} />

                        <TextField className="formItem" name="doi" id="doi" label="D.O.I. "
                       value={cliente.doi} onChange={ handlerCliente} />

                        <TextField  className="formItem" name="tlf_trabajo" size="30"  id="tlf_trabajo" label="Tlf. trabajo" 
                        value={cliente.tlf_trabajo} onChange={ handlerCliente} />
                    
                        <TextField className="formItem" name="tlf_otro" size="30"  id="tlf_otro" label="Tlf. particular" 
                        value={cliente.tlf_otro} onChange={ handlerCliente} />
                      
                        <TextField name="email_trabajo" size="30"  id="email_trabajo" label="Email del trabajo" 
                        value={cliente.email_trabajo} onChange={ handlerCliente}  className="formItem"/>                    

                        <TextField  className="formItem" name="cuenta_bancaria" size="30"  id="cuenta_bancaria" label="Cuenta Bancaria" 
                        value={cliente.cuenta_bancaria} onChange={ handlerCliente} />

                    </Grid>

                    <Grid item xs={6}  className="columnaForm">
                        <TextField className="formItem" name="apellido1" required   id="apellido1" label="Primer apellido"
                                onChange={ handlerCliente} value={cliente.apellido1} size="30"/>

                        <FormControl className="formItem">
                            <InputLabel id="label_tipo_doi">Tipo de DOI</InputLabel>
                            <Select  labelId="label_tipo_doi" name="tipo_doi"  id="tipo_doi"
                                    onChange={handlerCliente} value={cliente.tipo_doi}>
                                    <MenuItem value='NIF'>N.I.F.</MenuItem>
                                    <MenuItem value='NIE'>N.I.E.</MenuItem>
                                    <MenuItem value='CIF'>C.I.F.</MenuItem>
                            </Select>
                       </FormControl>

                        

                        <TextField
                                id="fecha_nacimiento"
                                label="Fecha"
                                type="date"
                               /* value={Util.fromdateJavaToDate (cliente.fecha_nacimiento)} */
                                /*onChange={ handlerCliente}*/
                                className="formItem"
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />






                            
                        <TextField className="formItem" name="tlf_contacto" size="30"  id="tlf_contacto" label="Tlf. contacto"
                        value={cliente.tlf_contacto} onChange={ handlerCliente} />

                        <TextField name="tlf_casa" size="30"  id="tlf_casa" label="Tlf. domicilio" 
                        value={cliente.tlf_casa} onChange={ handlerCliente}  className="formItem"/>

                        <TextField  className="formItem" name="email_contacto" size="30"  id="email_contacto" label="Email de contacto" 
                        value={cliente.email_contacto} onChange={ handlerCliente} />

                        <TextField name="email_particular" size="30"  id="email_particular" label="Email particular" 
                        value={cliente.email_particular} onChange={ handlerCliente} className="formItem"/>

                     </Grid>    
                </Grid>

            </Paper>
            <Paper elevation={3}>
                    <h4 className="formulario-titulo">Información Cliente<hr/></h4>

                        <TextField className="formItem" name="observaciones" id="observaciones" value={cliente.observaciones}
                       onChange={ handlerCliente} label="Observaciones al cliente" rows={4} variant="outlined"/>
                    

                    <FormControlLabel
                        control={<Checkbox
                            checked={cliente.solicitud_informacion === "S" ? true : false} 
                            onChange={handlerChecked}
                            name="solicitud_informacion" id="solicitud_informacion"
                            color="primary"
                            value={cliente.solicitud_informacion} />
                        }
                        label="Solicitud de información"
                    />


                    
                        <TextField className="formItem"  name="info_solicitud_informacion" id="info_solicitud_informacion"
                            value={cliente.info_solicitud_informacion} onChange={ handlerCliente} 
                            label="Solicitud de información" rows={4} variant="outlined" /> 
                        
                 
                    <FormControlLabel
                        control={<Checkbox
                            checked={cliente.presupuesto === "S" ? true : false} 
                            onChange={handlerChecked}
                            name="presupuesto" id="presupuesto"
                            color="primary"
                            value={cliente.presupuesto} />
                        }
                        label="Solicitud de presupuesto"
                    />
           
                        <TextField className="formItem"  name="info_presupuesto" id="info_presupuesto"
                            value={cliente.info_presupuesto} onChange={ handlerCliente}
                            label="Presupuesto" rows={4} variant="outlined" /> 
                        
                   

                    <FormControlLabel
                        control={<Checkbox                          
                             name="contratacion_servicio" id="contratacion_servicio" 
                            checked={cliente.contratacion_servicio  === "S" ? true : false} 
                            onChange={ handlerChecked}
                            color="primary"
                            defaultValue={cliente.contratacion_servicio}/> 
                        }
                        label="Contratación servicio"
                    />
                    
                        <TextField className="formItem" name="info_contratacion_servicio" id="info_contratacion_servicio"
                        value={cliente.info_contratacion_servicio} onChange={ handlerCliente}
                        label="Contratación" rows={4} variant="outlined" />
                        
                  

                   
                    <FormControlLabel
                        control={<Checkbox                          
                             name="eyaculacion_precoz" id="eyaculacion_precoz" 
                            checked={cliente.eyaculacion_precoz  === "S" ? true : false} 
                            onChange={ handlerChecked}
                            color="primary"
                            defaultValue={cliente.eyaculacion_precoz}/> 
                        }
                        label="Eyaculación precoz"
                    />

                    
                        <TextField className="formItem" name="info_eyaculacion_precoz" id="info_eyaculacion_precoz"
                        value={cliente.info_eyaculacion_precoz} onChange={handlerCliente}
                        label="Eyaculación precoz" rows={4} variant="outlined" />
                           
                
                    <FormControlLabel
                        control={<Checkbox                          
                             name="curvatura_pene" id="curvatura_pene" 
                            checked={cliente.curvatura_pene  === "S" ? true : false} 
                            onChange={ handlerChecked}
                            color="primary"
                            defaultValue={cliente.curvatura_pene}/> 
                        }
                        label="Curvatura del pene"
                    />



                   
                        <TextField className="formItem" name="info_curvatura_pene" id="info_curvatura_pene"
                         value={cliente.info_curvatura_pene} onChange={ handlerCliente}
                         label="Curvatura del pene" rows={4} variant="outlined" />
                        
                  

                    <FormControlLabel
                        control={<Checkbox                          
                             name="disfuncion_erectil" id="disfuncion_erectil" 
                            checked={cliente.disfuncion_erectil  === "S" ? true : false} 
                            onChange={ handlerChecked}
                            color="primary"
                            defaultValue={cliente.disfuncion_erectil}/> 
                        }
                        label="Disfunción eréctil"
                    />
                    
                        <TextField  className="formItem" name="info_disfuncion_erectil" id="info_disfuncion_erectil"
                        value={cliente.info_disfuncion_erectil} onChange={ handlerCliente}
                        label="Disfunción erectil" rows={4} variant="outlined" />
                         
                    <FormControlLabel
                        control={<Checkbox                          
                             name="falta_deseo" id="falta_deseo" 
                            checked={cliente.falta_deseo  === "S" ? true : false} 
                            onChange={ handlerChecked}
                            color="primary"
                            defaultValue={cliente.falta_deseo}/> 
                        }
                        label="Falta de deseo"
                    />
                    
                        <TextField  className="formItem" name="info_falta_deseo" id="info_falta_deseo"
                         value={cliente.info_falta_deseo} onChange={handlerCliente}
                         label="Falta de deseo" rows={4} variant="outlined"/>
                        
                    
                    <FormControlLabel
                        control={<Checkbox                          
                             name="enfermedades_transmision" id="enfermedades_transmision" 
                            checked={cliente.enfermedades_transmision  === "S" ? true : false} 
                            onChange={ handlerChecked}
                            color="primary"
                            defaultValue={cliente.enfermedades_transmision}/> 
                        }
                        label="Enfermedades de transmisión"
                    />

                   
                        <TextField  className="formItem" name="info_enfermedades_transmision" id="info_enfermedades_transmision"
                         value={cliente.info_enfermedades_transmision} onChange={ handlerCliente}
                         label="Enfermedades de transmisión sexual" rows={4} variant="outlined"/>
                       
                
                    <input id="id_cliente" name="id_cliente" type="hidden" value={cliente.id_cliente}/>
                    <input id="fecha_alta" name="fecha_alta" type="hidden" value={Util.hoyToJava()}/>
                    
                    <div><Button variant="contained" color="primary" type="submit">Guardar</Button></div>
                  </Paper> 
             </form>
        
    )
}

export default Clientes
