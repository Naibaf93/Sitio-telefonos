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

async function consultarUno() {
    try {
        let id = document.getElementById('txtConsulta').value;

        if (id === '') {
            alert('No ha ingresado ningún ID');
            return;
        }

        axios.get('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/' + id)
        .then(respuesta => {
            let dispositivo = respuesta.data;
            document.getElementById('consultaNombre').value = dispositivo.marca;
            document.getElementById('consultaModelo').value = dispositivo.modelo;
            document.getElementById('consultaColor').value = dispositivo.color;
            document.getElementById('consultaAlmacenamiento').value = dispositivo.almacenamiento + ' GB';
            document.getElementById('consultaProcesador').value = dispositivo.procesador;
        })
        .catch(error => { throw new Error("Error en la solicitud: " + error) })
    } catch (error) {
        console.error(error)
    }
}