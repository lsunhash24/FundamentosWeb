//método que permite ejecutar jquery una vez que se
//han cargados los elementos Html al DOM
$(document).ready(function() {

    //peticion ajax que realiza una consulta http a la api
    // con datos tipo json y los devuelve a traves del método 
    //success 
    $.ajax({
        type: "GET",
        url: "https://www.feriadosapp.com/api/holidays.json",
        dataType: "json",
        //funcion que recibe los datos de la consulta
        success: function(datos) {

            //se declara una variable que contiene el elemento
            //html al cual se le traspasan los datos de la
            //consulta, en este caso es el <tbody>           
            let info = document.querySelector('#info');

            //como los datos consultados son de tipo arreglo
            // se recorren con un ciclo for of
            //se interpolan los datos
            //requeridos de la data (llamada datos) hacia el
            //template html mediante jquery, este template 
            // corresponde a las celdas de la tabla traida desde
            // boostrap donde se insertar los datos mediante notacion
            //backstick con las variables placeholders 

            for (let valor of datos.data) {
                info.innerHTML += `
                       <tr>
                          <td>${valor.date}</td>
                          <td>${valor.title}</td>
                          <td>${valor.extra}</td>
                          <td>${valor.law}</td>
                       </tr>
                   `
            }
        },
        error: function(data) {
            alert("Error al accesar la Api")
        },
        async: true,
    });

});