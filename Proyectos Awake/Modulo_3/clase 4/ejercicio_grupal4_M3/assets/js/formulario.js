import {
  Persona,
  validaTexto,
  obtenerLocalStorage,
  ventana,
  parrafo,
  guardarLocalStorage,
  activarCargas,
  desactivarCargas,
  activarFecha,
  desactivarFecha,
  currencyFormatter,
  existeFecha,
  validarFechaMenorActual,
} from "./funciones.js";

desactivarCargas();
desactivarFecha();

//se deactivan checkbok de cargas familiares y
//trabajador activo
document.getElementById('cargas').checked = false;
document.getElementById('activo').checked = false;
//función que activa y desactiva los elementos de
//cargas familiares y trabajador activo cuando 
//ocurre el evento click en el checkbok
let cargas = document.getElementById('cargas');
let activo = document.getElementById('activo');

cargas.addEventListener('click', function () {

  if (cargas.checked) {
    activarCargas();

  } else {
    desactivarCargas();
  }
});

activo.addEventListener('click', function () {

  if (activo.checked) {
    activarFecha();

  } else {
    desactivarFecha();
  }
});

//obtenemos el elemento form del DOM por su "id" y lo 
//asignamos a la variable form
let form = document.getElementById("form");

//se asigna un evento de escucha al elemento (formulario)
//en este caso es el evento submit, cuando ocurre lo asigna a la funcion,
// el metodo preventDefault evita que se envie el formulario por defecto.
form.addEventListener("submit", function (event) {
  event.preventDefault()
  //se definen la variables con los datos capturados del formulario
  let nombre = document.getElementById('input_nombre').value,
    apellido = document.getElementById('input_apellido').value,
    fechaNac = document.getElementById('input_nacimiento').value,
    activo = document.getElementById('activo').checked,
    fechaIngreso = document.getElementById('input_ingreso').value,
    sueldoActual = parseInt(document.getElementById('inputSueldoActual').value),
    sueldoAnterior = document.getElementById('inputSueldoAnterior').value,
    cargas = document.getElementById('cargas').checked,
    numCargas = parseInt(document.getElementById('inputCargas').value);

  //validar fecha nacimiento
   if(!validarFechaMenorActual(fechaNac)) {
      parrafo.innerHTML = "Ingrese fecha de nacimiento correcta";
      ventana.show();
      return;
   }
 
  //analizar si el checkbok es cargas familiares es seleccionado
  if (cargas) {
        if(numCargas<=0 ||  numCargas == null || isNaN(numCargas)){
           parrafo.innerHTML = "Ingrese numero cargas positivo";
           ventana.show();
          return;
        } 
  } else {
    numCargas = 0;
  }
  
  // validacion de la fecha de ingreso
  if (activo) {
       if(validarFechaMenorActual(fechaIngreso)){
            if(!existeFecha(fechaIngreso)){
                  parrafo.innerHTML = "La fecha introducida no existe.";
                  ventana.show(); 
                  return;
            }
       }else{
            parrafo.innerHTML = "Fecha ingreso debe ser igual o anterior a la actual.";
            ventana.show();
            return;
       }
  }

  //validación de textos ingresados
  if (validaTexto(nombre) && validaTexto(apellido)) {

    //se crea una instancia del objeto Persona y se le agregan los datos capturados
    //por el formulario
    let nuevaPersona = new Persona(nombre, apellido, fechaNac, activo, fechaIngreso, sueldoActual, sueldoAnterior, cargas, numCargas);

    //se agrega el nuevo afiliado a un arreglo con nuevos datos como el valor
    //de la carga familiar, el sueldo final y periodo en la org, si es activo
    let datos = ({
       nombre: nuevaPersona.nombre,
       apellido: nuevaPersona.apellido,
       fechaNac: nuevaPersona.fechaNac,
       activo: nuevaPersona.activo,
       periodo: nuevaPersona.periodo(),
       sueldoActual: currencyFormatter({currency: "CLP", value: nuevaPersona.sueldoActual}),
       numCargas: nuevaPersona.numCargas,
       valorCarga: currencyFormatter({currency: "CLP",value: nuevaPersona.asignacionFamiliar()}),
       sueldoFinal: currencyFormatter({currency: "CLP",value: (nuevaPersona.sueldoActual + nuevaPersona.asignacionFamiliar() * nuevaPersona.numCargas)})
    });

    //se limpia el formulario
     form.reset();
     desactivarCargas();
     desactivarFecha();

    // se aguardan los datos en local storage
    guardarLocalStorage(datos);

    //se obriene los datos desde el local Storage
    let data = obtenerLocalStorage();

    //se muestran los datos en una tabla
  $('#myTabla').DataTable({
      paging: true,
      searching: true,
      language: {
        "decimal": "",
        "emptyTable": "No hay información",
        "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
        "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
        "infoFiltered": "(Filtrado de _MAX_ total entradas)",
        "infoPostFix": "",
        "thousands": ",",
        "lengthMenu": "Mostrar _MENU_ Entradas",
        "search": "Buscar:",
        "zeroRecords": "Sin resultados encontrados",
        "paginate": {
          "first": "Primero",
          "last": "Ultimo",
          "next": "Siguiente",
          "previous": "Anterior"
        }
      },
      data: data,
          "columns": [{
          title: "Nombre",
          "data": "nombre",
        },
        {
          title: "Apellido",
          "data": "apellido",
        },
        {
          title: "Activo",
          "data": "activo",
          render: function (data, type, row, meta) {
          //uso de operador ternario anidado para insertar icono si el trabajador es activo o inactivo
            return type === 'display'
                ? data ?'<i class="fa-solid fa-circle-check" style="font-size:18px; color:green;">':'<i class="fa-solid fa-circle-xmark" style="font-size:18px; color:red;"></i>'
                : data;               
          },
        },
        {
          title: "Sueldo",
          "data": "sueldoActual",
        },
        {
          title: "Valor C.Fam.",
          "data": "valorCarga",
        },
        {
          title: "Sueldo Final",
          "data": "sueldoFinal",
        },
        {
           title: "Accion",
          "defaultContent": "<button>Ficha</button>",
        },
      ],
      //se agrega un boton al final de la fila para mostrar
      //datos de la persona en una ventana modal
      columnDefs: [
        { targets: 3, visible: false },
        {
            targets: -1,
            orderable: false,
            data: null,
            render: function (data, type, row, meta) {
                let datos = data;
                let botones = `
                        <button class='btn btn-info btn-circle'
                            onclick='$("#txt").text("Datos trabajador: Nombre: ${datos.nombre} ${datos.apellido} Sueldo actual: ${datos.sueldoActual} Valor carga familiar: ${datos.valorCarga} Sueldo final: ${datos.sueldoFinal}, ${datos.periodo}");
                            $("#myModal").modal("show");' style="font-size:15px;">
                            <i class="fa-regular fa-file-lines" style="font-size:12px;"></i> Ficha
                        </button>`;
                return botones;
            }
        }
      ],
      "bDestroy": true
    });

  }
});