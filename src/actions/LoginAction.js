
export const loginAction = (data) => {
    return async(dispatch) => {
        const respuesta = await fetch("http://localhost:8081/login", {
            method: 'POST', 
            body: data})
        .then(res=> res.json())
        .catch(error => console.error('Error:', error))
        .then(res => { console.log(res)});
    }
        
    
}

