import React, { Component, useState, useEffect } from 'react';
import './listado.css';
import Util from '../util_fechas.js';
import Filtro from './filtro.component';
import { Button } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const Listado = () => {

    const [items, setItems] = useState([]);
    const [next, setNext] = useState(false);
    const [pag, setPag] = useState(1);

    useEffect( () => {
        consultarClientes(pag);
    },[]);

    


    const consultarClientes = (p) => {
        fetch("http://localhost:8081/lista/"+ p)
        .then(res=> res.json())
        .then(res => {

            if ( res.length === 6){
                setNext(true);
            }else{
                setNext(false);
            }
            setItems(res);
        })
    }

    function siguiente(){
        
        consultarClientes(pag + 1);
        setPag ( pag + 1);
    };

    function previo() {
        
        consultarClientes(pag - 1);
        setPag ( pag - 1);
    }

    function irDetalle (id) {window.location.href =  "/cliente/" + id;} 

    const buscarFiltro = (e) => {
        e.preventDefault();
        const data = new FormData ( e.target);
        fetch("http://localhost:8081/filtro", {
            method: 'POST', 
            body: data         
        })
        .then(res=> res.json())
        .then(res => {
            setPag (1);
            setItems(res);
            setNext(false);
        });
    }

    return (
          <div>
              <Filtro  buscarFiltro={buscarFiltro}  consultarClientes={consultarClientes}/>
           

            <TableContainer  component={Paper}>
                <Table aria-label="simple table" size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Id</TableCell>
                            <TableCell align="center">Nombre</TableCell>
                            <TableCell align="center">DOI</TableCell>
                            <TableCell align="center">Teléfono</TableCell>
                            <TableCell align="center">Provincia</TableCell>
                            <TableCell align="center">Localidad</TableCell>
                            <TableCell align="center">Fecha alta</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                {items.map(item=>(
                    <TableRow  key = {item[0]}>
                        
                        <TableCell  ><Button variant="contained" size="small" onClick={() => irDetalle(item[0])}  color="primary" title="Ver detalle">{item[0]}</Button></TableCell >
                        <TableCell  className="listado-left">{item[3]} {item[4]}, {item[2]}</TableCell >
                        <TableCell >{item[5]}: {item[6]}</TableCell >
                        <TableCell >{item[7]}</TableCell >
                        <TableCell >{item[8]}</TableCell >
                        <TableCell >{item[9]}</TableCell >
                        <TableCell >{Util.fromdateJavaToJS(item[10])}</TableCell >
                    </TableRow >    
                    ))}
                </TableBody>
            </Table>
            </TableContainer>
            {pag >= 2 ?  <Button size="small" onClick={() => previo()}  color="primary">Anterior</Button> : null}
            {next ? <Button size="small" onClick={() => siguiente()}  color="primary">Siguiente</Button> : null }
            </div>
        )
    
}

export default Listado
