import React, { useState, useEffect } from 'react';
import { Paper, TableContainer, Table, TableCell, TableRow, TableBody, TableHead, Button, MenuItem, Select, Grid, InputLabel, FormControl, TextField } from '@material-ui/core';
import {useSelector } from 'react-redux';

const Direcciones = () => {

    
    const [direccion, seTableCellireccion] = useState({
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
    });

    const listadirecciones = useSelector( state => state.direcciones.direcciones);


    const [nuevadireccion, setNuevadireccion] = useState(false);

    const handlerSubmiTableCellirecciones = (e) => {
        e.preventdefault();
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


    function ediTableCellireccion (index) {
       setNuevadireccion(true);
       
        seTableCellireccion({
            dir_direccion:listadirecciones[index].dir_direccion,
            dir_tipo_via:listadirecciones[index].tipo_via,
            dir_numero:listadirecciones[index].dir_numero,
            dir_puerta:listadirecciones[index].dir_puerta,
            dir_piso:listadirecciones[index].dir_piso,
            dir_provincia:listadirecciones[index].dir_provincia,
            dir_localidad:listadirecciones[index].dir_localidad,
            dir_cp:listadirecciones[index].dir_cp,
            dir_tipo_domicilio:listadirecciones[index].dir_tipo_domicilio,
            dir_id_cliente:listadirecciones[index].dir_id_cliente,
            dir_id:listadirecciones[index].dir_id
        });

    }

    const handlerDireccion = e => { 
        seTableCellireccion({ ...direccion,  [e.target.name]:e.target.value    }) 
    }



    return (
        <Paper elevation={3}>
          <form name="formDirecciones" onSubmit={handlerSubmiTableCellirecciones}>
          <h4 className="formulario-titulo">Direcciones<hr/></h4>
                <div  style={nuevadireccion ? {display:"block"} : {display:"none"}}>
                <Grid container spacing={3} >

                    <Grid item xs={6}  className="columnaForm">
                    <FormControl className="formItem">
                            <InputLabel id="label_tipo_domicilio">Tipo de domicilio</InputLabel>
                            <Select labelId="label_tipo_domicilio" name="tipo_domicilio"  id="tipo_domicilio"
                                    onChange={handlerDireccion} value={direccion.dir_tipo_domicilio}>
                                <MenuItem value=''>- Seleccione el tipo de domicilio - </MenuItem>
                                <MenuItem value='HABITUAL'>Habitual</MenuItem>
                                <MenuItem value='SEG_DOM'>Segunda residencia</MenuItem>
                                <MenuItem value='FACT'>Facturación</MenuItem>
                                <MenuItem value='TRABAJO'>Trabajo</MenuItem>
                            </Select>
                       </FormControl> 
                      
                        <TextField className="formItem" name="numero" size="5" id="numero" 
                         label="numero" value={direccion.dir_numero} onChange={ handlerDireccion} />
                                              
                        <TextField className="formItem" name="piso" size="5" id="piso" label="Piso" 
                             value={direccion.dir_piso} onChange={ handlerDireccion}/>
                                                  
                        <TextField className="formItem" name="provincia" size="30" id="provincia" label="Provincia" 
                             value={direccion.dir_provincia} onChange={ handlerDireccion}/>
                        
                    </Grid>
                    <Grid item xs={6}  className="columnaForm">

                        <FormControl className="formItem">
                            <InputLabel id="label_tipo_via">Tipo de Vía : </InputLabel>
                            <Select labelId="label_tipo_via" name="tipo_via" id="tipo_via"
                            onChange={handlerDireccion} 
                            value={direccion.dir_tipo_via} >
                                <MenuItem value=''>- Seleccione el tipo de Vía - </MenuItem>
                                <MenuItem value='CALLE'>Calle</MenuItem>
                                <MenuItem value='PLAZA'>Plaza</MenuItem>
                                <MenuItem value='CTRA'>Carretera</MenuItem>
                                <MenuItem value='AVD'>Avenida</MenuItem>
                            </Select>
                        </FormControl>
                
                        <TextField className="formItem" name="puerta" size="5" id="puerta"
                             label="Puerta" value={direccion.dir_puerta} onChange={ handlerDireccion}/>
              
                        <TextField className="formItem" name="provincia" size="30" id="provincia" label="Provincia" 
                             value={direccion.dir_provincia} onChange={ handlerDireccion}/>
                                                                        
                        <TextField className="formItem" name="cp" size="5" id="cp" label="Código postal" 
                             value={direccion.dir_cp} onChange={ handlerDireccion}/>
                 
                    </Grid>   
                    <Grid item xs={12}  className="columnaForm">

                            <TextField className="formItem" name="localidad" size="80" id="localidad" label="Localidad" 
                            value={direccion.dir_localidad} onChange={ handlerDireccion}/> 
                                         
                            <TextField className="formItem" name="direccion" size="80" id="direccion" label="Direccion" 
                             value={direccion.dir_direccion} onChange={ handlerDireccion}/>
                        
                    </Grid>
                </Grid>      
                                         
                        <input className="formItem" id="id" name="id" type="hidden" value={direccion.dir_id}/>
                        <input className="formItem" id="id_cliente" name="id_cliente" type="hidden" value={direccion.id_cliente}/>
                        <div className="formulario-tabla">
                            
                            <Button variant="contained" color="primary" type="submit" size="small">Guardar</Button>
                            <Button variant="contained"  size="small" type="button" onClick={() => setNuevadireccion(false)}>Cancelar</Button>
                        </div>
                </div>   
            </form>
                
                 <div style={nuevadireccion ? {display:"none"} : {display:"block"}}>
                 <TableContainer  component={Paper}>
                 <Table aria-label="simple table" size="small">

                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Tipo de domicilio</TableCell>
                                <TableCell>Tipo de vía</TableCell>
                                <TableCell>Dirección</TableCell>
                                <TableCell>Número</TableCell>
                                <TableCell>Puerta</TableCell>
                                <TableCell>Piso</TableCell>
                                <TableCell>Provincia</TableCell>
                                <TableCell>Localidad</TableCell>
                                <TableCell>Código Postal</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {listadirecciones.map((item,index )=>(
                            <TableRow key = {index}>
                                <TableCell className="listado-enlace"><a href="#" title="editar" onClick={() => ediTableCellireccion(index)}>{item.id}</a></TableCell>
                                <TableCell>{item.tipo_domicilio}</TableCell>
                                <TableCell>{item.tipo_via}</TableCell>
                                <TableCell>{item.direccion}</TableCell>
                                <TableCell>{item.numero}</TableCell>
                                <TableCell>{item.puerta}</TableCell>
                                <TableCell>{item.piso}</TableCell>
                                <TableCell>{item.provincia}</TableCell>
                                <TableCell>{item.localidad}</TableCell>
                                <TableCell>{item.cp}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                        </Table>
                        </TableContainer>
                        <div className="formulario-tabla">
                            <Button variant="contained" color="primary" type="button" size="small" onClick={() => setNuevadireccion(true)}>Nueva dirección</Button>
                        </div>
                </div>   
        </Paper>
    )
}

export default Direcciones
