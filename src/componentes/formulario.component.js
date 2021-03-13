import React, { useEffect } from 'react';
import './formulario.css';
import Clientes from './clientes.component';
import Direcciones from './direcciones.component';
import Servicios from './servicios.component';
import {useDispatch } from 'react-redux';
import { CargarDireccionesAction } from '../actions/DireccionesAction';
import { CargarServiciosAction } from '../actions/ServiciosAction';
import { CargarClienteAction } from '../actions/ClientesAction';

const Formulario = (props) => {

   
    let montado = false;
    const dispatch = useDispatch();


    
    useEffect ( () => {  
      
        montado = true;     
        if ( props.match.params.id !== undefined){
            fetch("http://localhost:8081/cliente/" + props.match.params.id )
            .then(res=> res.json())
            .then(res => {
                
                if ( montado){

                    let clientemsv = {};

                    clientemsv.id_cliente = res.id_cliente;
                    clientemsv.nombre = res.nombre;
                    clientemsv.fecha_alta = res.fecha_alta;
                    clientemsv.fecha_baja = res.fecha_baja;
                    clientemsv.apellido1 = res.apellido1;
                    clientemsv.apellido2 = res.apellido2;
                    clientemsv.fecha_nacimiento = res.fecha_nacimiento;
                    clientemsv.sexo = res.sexo;
                    clientemsv.doi = res.doi;
                    clientemsv.tipo_doi = res.tipo_doi;
                    clientemsv.tlf_contacto = res.tlf_contacto;
                    clientemsv.tlf_trabajo = res.tlf_trabajo;
                    clientemsv.tlf_casa = res.tlf_casa;
                    clientemsv.tlf_otro = res.tlf_otro;
                    clientemsv.email_contacto = res.email_contacto;
                    clientemsv.email_trabajo = res.email_trabajo;
                    clientemsv.email_particular = res.email_particular;
                    clientemsv.cuenta_bancaria = res.cuenta_bancaria;
                    clientemsv.observaciones = res.observaciones;
                    clientemsv.presupuesto = res.presupuesto;
                    clientemsv.info_presupuesto = res.info_presupuesto;
                    clientemsv.solicitud_informacion = res.solicitud_informacion;
                    clientemsv.info_solicitud_informacion = res.info_solicitud_informacion;
                    clientemsv.contratacion_servicio = res.contratacion_servicio;
                    clientemsv.info_contratacion_servicio = res.info_contratacion_servicio;
                    clientemsv.eyaculacion_precoz = res.eyaculacion_precoz;
                    clientemsv.info_eyaculacion_precoz = res.info_eyaculacion_precoz;
                    clientemsv.curvatura_pene = res.curvatura_pene;
                    clientemsv.info_curvatura_pene = res.info_curvatura_pene;
                    clientemsv.disfuncion_erectil = res.disfuncion_erectil;
                    clientemsv.info_disfuncion_erectil = res.info_disfuncion_erectil;
                    clientemsv.falta_deseo = res.falta_deseo;
                    clientemsv.info_falta_deseo = res.info_falta_deseo;
                    clientemsv.enfermedades_transmision = res.enfermedades_transmision;
                    clientemsv.info_enfermedades_transmision = res.info_enfermedades_transmision;

                    dispatch ( CargarClienteAction( clientemsv));
                        
                    

                    let dir = [];
                    for (let i = 0; i < res.direcciones.length; i++) {        
                        dir.push(res.direcciones[i]);
                    }
                    dispatch ( CargarDireccionesAction( dir));

                    let serv = [];
                    for (let i = 0; i < res.servicios.length; i++) {
                        serv.push(res.servicios[i]);
                    }
                    dispatch ( CargarServiciosAction( serv));
                   
                  
                }

            }  )
           }
    }, []); 

   
        return (
            
            <section>
             <Clientes />  
             <Direcciones /> 
            <Servicios />   
        </section>
            
     )
    
}

export default Formulario;