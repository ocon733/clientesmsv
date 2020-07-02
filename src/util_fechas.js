  
    export default class Util_fechas{
        static fromdateJavaToDate  (date) {
        
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



        static fromdateJavaToJS  (date) {
        
            if  ( date !== ""){
                let fecha = new Date(date);
                let dia =  fecha.getDate().toString();
                if ( dia.length === 1){  dia = "0" + dia; }
                let mes = (fecha.getMonth()+1).toString();
                if ( mes.length === 1){  mes = "0" + mes; }
                let txt = dia + "/" + mes + "/" + fecha.getFullYear();
                return txt;
            }else {
                return "";
            }
        }
    }
    
    
    
    
    
    



