import React, { useState } from 'react'
import Util from '../util_fechas.js';
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button, Grid, FormControl, MenuItem, InputLabel, Select, TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';

const Servicios = () => {

    const [servicio, setServicio] = useState({
        serv_id:"",
        serv_id_cliente:"",
        serv_tratamiento: "",
        serv_info_tratamiento:"",
        serv_fecha_inicio_tratamiento:"",
        serv_fecha_fin_tratamiento:""
    });

   
    const [nuevoservicio, setNuevoservicio] = useState(false);

    const listaservicios = useSelector( state => state.servicios.servicios);


    const handlerSubmitServicios = (e) => {
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

    function editServicio ( index) {
        setNuevoservicio(true);
        setServicio( {
            serv_tratamiento: listaservicios[index].tratamiento,
            serv_info_tratamiento: listaservicios[index].info_tratamiento,
            serv_fecha_inicio_tratamiento: listaservicios[index].fecha_inicio_tratamiento,
            serv_fecha_fin_tratamiento: listaservicios[index].fecha_fin_tratamiento,
            serv_id: listaservicios[index].id,
            serv_id_cliente: listaservicios[index].id_cliente
        });
    }

    const handlerServicios = e => { 
        setServicio({ ...servicio,  [e.target.name]:e.target.value    }) 
    }


    return (
        <Paper elevation={3}>
            <form name="formServicios" onSubmit={handlerSubmitServicios}>
            <h4 className="formulario-titulo">Servicios<hr/></h4>
                <div style={nuevoservicio  ? {display:"block"} : {display:"none"}}>
            
                <Grid container spacing={3} >
                <Grid item xs={12}  className="columnaForm">
                        <FormControl className="formItem">
                                <InputLabel id="label_tratamiento">Tratamiento : </InputLabel>
                                <Select labelId="label_tratamiento" name="tratamiento" id="tratamiento" onChange={ handlerServicios} 
                                value={servicio.serv_tratamiento}>
                                    <MenuItem value=''>- Seleccione el tratamiento - </MenuItem>
                                    <MenuItem value='EYACULACION_PRECOZ'>EYACULACION PRECOZ</MenuItem>
                                    <MenuItem value='CURVATURA_PENE'>CURVATURA PENE</MenuItem>
                                    <MenuItem value='DISFUNCION_ERECTIL'>DISFUNCION ERECTIL</MenuItem>
                                    <MenuItem value='FALTA_DESEO'>FALTA DE DESEO</MenuItem>
                                    <MenuItem value='ENFERMEDADES_TRANSMISION'>ENFERMEDADES DE TRANSMISION</MenuItem>
                                    <MenuItem value='OTROS_TRATAMIENTOS'>OTROS TRATAMIENTOS</MenuItem>
                                </Select>
                        </FormControl>
                        
                         <TextField className="formItem" name="info_tratamiento" id="info_tratamiento" label="Tratamiento"
                         value={servicio.serv_info_tratamiento} onChange={ handlerServicios} rows={4} variant="outlined" />

                </Grid>
                    <Grid item xs={6}  className="columnaForm">
                        
                        <TextField name="fecha_inicio_tratamiento"  id="fecha_inicio_tratamiento" type="date"  label="Fecha inicio tratamiento"
                        value={Util.fromdateJavaToDate (servicio.serv_fecha_inicio_tratamiento)} onChange={ handlerServicios}
                        className="formItem"
                                InputLabelProps={{
                                shrink: true,
                                }} />
                      
                        
                    </Grid>
                    <Grid item xs={6}  className="columnaForm">

                        <TextField name="fecha_fin_tratamiento"  id="fecha_fin_tratamiento" type="date" label="Fecha fin tratamiento"
                        value={Util.fromdateJavaToDate (servicio.serv_fecha_fin_tratamiento)} onChange={ handlerServicios} 
                        className="formItem"
                                InputLabelProps={{
                                shrink: true,
                                }}/>
                    
                    </Grid>
                </Grid>
            
                        <input id="id" name="id" type="hidden" value={servicio.serv_id}/>
                        <input id="id_cliente" name="id_cliente" type="hidden" value={servicio.id_cliente}/>
                        <div className="formulario-tabla">
                            <Button variant="contained" color="primary" type="submit" size="small">Guardar</Button> 
                            <Button variant="contained" size="small" type="button" onClick={() =>setNuevoservicio(false)}>Cancelar</Button> 
                            </div>
                  </div>
                </form>
                    
                
                <div  style={nuevoservicio ? {display:"none"} : {display:"block"}}>
                   
                    <TableContainer  component={Paper}>
                        <Table aria-label="simple table" size="small">
                        <TableHead>                        
                            <TableRow>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">Tratamiento</TableCell>
                                <TableCell align="left">Observaciones tratamiento</TableCell>
                                <TableCell align="left">Fecha inicio de tratamiento</TableCell>
                                <TableCell align="left">Fecha fin de tratamiento</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {listaservicios.map((item, index)=>(
                            <TableRow key = {index}>
                                <TableCell className="listado-enlace"><a href="#" onClick={ () => editServicio(index)} >{item.id}</a></TableCell>
                                <TableCell>{item.tratamiento}  </TableCell>
                                <TableCell>{item.info_tratamiento}</TableCell>
                                <TableCell>{Util.fromdateJavaToJS(item.fecha_inicio_tratamiento)}</TableCell>
                                <TableCell>{Util.fromdateJavaToJS(item.fecha_fin_tratamiento)} </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                        </Table>
                        </TableContainer>

                        <div>
                            <Button variant="contained" color="primary" type="button" size="small" onClick={() =>setNuevoservicio(true)}>Nuevo servicio</Button>
                        </div>
                    </div> 
        </Paper>
    )
}

export default Servicios
