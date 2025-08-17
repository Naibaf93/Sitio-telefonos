async function obtenerTodos() {
    try {
        fetch('https://my-json-server.typicode.com/fedegaray/telefonos/db', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(respuesta => respuesta.json())
        .then(data => {
            let cuerpoTabla = document.getElementById("tblContenido");
            let salida = "";
            for(let elemento of data.dispositivos){
                salida += `
                    <tr>
                        <td>${elemento.id}</td>
                        <td>${elemento.marca}</td>
                        <td>${elemento.modelo}</td>
                        <td>${elemento.color}</td>
                        <td>${elemento.almacenamiento} GB</td>
                        <td>${elemento.procesador}</td>
                    </tr>
                `;
            } 
            cuerpoTabla.innerHTML = salida;
        })
        .catch(error => { throw new Error("Error en la solicitud: " + error) })
    } catch (error) {
        console.error(error)
    }
}