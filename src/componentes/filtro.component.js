import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './filtro.css';

const Filtro = (props) => {

    const [filtro,setFiltro] = useState({
        nombre:"",
        apellido1:"",
        apellido2:"",
        email_contacto:"",
        tlf_contacto:"",
        doi:""
    })

    const buscarFiltro = (e) => {
        
        e.preventDefault();
        if (validarFiltro()){
            props.buscarFiltro(e);
        }else{
            props.consultarClientes();
        }
    }

    const validarFiltro = () => {
       if ( filtro.nombre === "" &&   filtro.apellido1 === "" && filtro.apellido2 === "" && filtro.email_contacto === "" &&   filtro.tlf_contacto === "" &&  filtro.doi === ""){
           return false;
       }else{
           return true;
       }
    }



    const filtroHandler = (e) => {
        setFiltro({...filtro, [e.target.name]:e.target.value});
    }
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  


    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary >
               <strong> Mostrar filtros de búsqueda</strong>
            </AccordionSummary>
            <AccordionDetails >
                <form onSubmit={buscarFiltro} style={{width:"100%"}}>
                    <Paper >
                        <Grid container spacing={3} >

                        <Grid item xs={6}  className="columnaForm">
                         
                            <TextField className="formItem" name="nombre"   id="nombre" label="Nombre"
                                onChange={ filtroHandler} />
                                             
                            <TextField className="formItem" name="apellido1"   id="apellido1" label="Primer apellido"
                                onChange={ filtroHandler} />
                                                         
                            <TextField className="formItem" name="apellido2"   id="apellido2"  label="Segundo apellido"
                                onChange={filtroHandler} />
                        </Grid>    

                        <Grid item xs={6} className="columnaForm">
                            
                                <TextField className="formItem" name="tlf_contacto"   id="tlf_contacto" label="Teléfono" 
                                onChange={ filtroHandler} />
                           
                                <TextField className="formItem" name="doi"   id="doi" label="DOI" 
                                onChange={ filtroHandler} />
                            
                                <TextField className="formItem" name="email_contacto"   id="email_contacto" label="E-mail" 
                                onChange={ filtroHandler} />
                            
                                 
                           </Grid> 
                        </Grid>  
                        <div > <Button type="submit"  color="primary">Buscar</Button></div>
                    </Paper>
                </form>
            </AccordionDetails>
      </Accordion>





              
        </div>
    )
}

export default Filtro
