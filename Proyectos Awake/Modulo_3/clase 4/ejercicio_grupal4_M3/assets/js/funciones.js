//se crea instancias de ventana modal
export var ventana = bootstrap.Modal.getOrCreateInstance(myModal);

//se declara variables con el texto del cuerpo de la modal
export var parrafo = document.getElementById("txt");

//funcion que formatea los valores numericos
export function currencyFormatter({ currency, value}) {
    const formatter = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      minimumFractionDigits: 0,
      currency
    }) 
    return formatter.format(value)
}
//se crea la función constructora del objeto Afiliado
export function Persona( nombre, apellido, fechaNac, activo, fechaIngreso, sueldoActual, sueldoSemAnt, cargaFam, numCargas ){
    
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNac = fechaNac;
    this.activo = activo;
    this.fechaIngreso = fechaIngreso;
    this.sueldoActual = sueldoActual;
    this.sueldoSemAnt = sueldoSemAnt;
    this.cargaFam = cargaFam;
    this.numCargas = numCargas;

  //método que calcula el valos de la asignación familiar, 
  //dependiendo del sueldo del semestre anterior
    this.asignacionFamiliar = function() {
        let valorCarga=0;
        if( this.cargaFam ){
            if(sueldoSemAnt <= 429899 ){
                valorCarga = 16828;
                return  valorCarga;
            }else if( sueldoSemAnt > 429899 && sueldoSemAnt <= 627913 ){
                valorCarga = 10327;
                return  valorCarga;
            }else if( sueldoSemAnt > 627913 && sueldoSemAnt <= 979330 ){
                valorCarga = 3264;
                return  valorCarga;
            }
        }
        return valorCarga;
    }
  //metodo que calcula el sueldo final 
    this.sueldoFinal = function() {
      if( this.cargaFam ) {
         return this.sueldoActual + this.asignacionFamiliar()*this.numCargas;
      }
         return this.sueldoActual;
    } 
  //metodo que obtiene el periodo en la organizacion
    this.periodo = function() {
      let mensaje = "";
        if( this.activo ) {
          
          return mensaje = tiempoOrganizacion(this.fechaIngreso);

        }
          return mensaje = "Trabajador inactivo";     
    }    
}

//función que valida input tipo texto
export const validaTexto = (texto) => {
if( texto == null || texto.length == 0 || /^\s+$/.test(texto) ) { 
    parrafo.innerHTML = "Ingrese datos válidos";
    ventana.show();
    return false;
    }else {
    return true;
    }
}

//función que valida input tipo numérico
export const validaNumero = (numero) => {
if( numero == null || numero.length == 0 || /^\s+$/.test(numero) ) { return false;}
}

//se desactivan los elementos de cantidad cargas familiares
 export const desactivarCargas = () => {
   document.getElementById("inputCargas").style.display = "none";
 }

 //función que habilita los input de ingreso para el trabajador activo
 export const activarCargas = () => {
    document.getElementById("inputCargas").style.display = "block";
  }
 
//se desactivan los elementos de cantidad cargas familiares
export const desactivarFecha = () => {
    document.getElementById("input_ingreso").style.display = "none";
    document.getElementById("labelIngreso").style.display = "none";
  }
 
  //función que habilita los input de ingreso para el trabajador activo
export const activarFecha = () => {
     document.getElementById("input_ingreso").style.display = "block";
     document.getElementById("labelIngreso").style.display = "block";  
  }   
 //funcion para guardar datos en el local storage
  export const guardarLocalStorage = (arr) => {
    let obtenerLocal = actualizarLocalStorage()
    let arregloActual = obtenerLocal.concat(arr)
    localStorage.setItem('data', JSON.stringify(arregloActual));

  }

  export const actualizarLocalStorage = () => {
    let dataParse = JSON.parse(localStorage.getItem('data')) || [];
    return dataParse
  }
 //función que obtiene los datos del local Storage
  export const obtenerLocalStorage = () => {
    let dataParse = JSON.parse(localStorage.getItem('data')) || [];
    return dataParse
  }

  // Cálculo del tiempo en la organizacion
export function tiempoOrganizacion(fecha) {
  // Obtenemos la fecha y hora actual
  let hoy = new Date();
  let fecha2 = new Date(fecha);

  // Calculamos la diferencia en milisegundos entre la fecha actual y argumento
  let tiempo = hoy.getTime() - fecha2.getTime();

  // Convertimos los milisegundos a días, minutos y segundos, redondeando hacia abajo con 
  // Math.floor

// Convertir a años
var anios = Math.floor(tiempo / (1000 * 60 * 60 * 24 * 365.25));
let mensaje1 = `${anios} año(s),`;
if (anios == 0) {
    mensaje1 = ` `;
}
// Convertir a meses
var meses = Math.floor((tiempo % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
let mensaje2 = `${meses} mes(es),`;
  if (meses == 0) {
     mensaje2 = ` `;
  }
// Convertir a días
var dias = Math.floor((tiempo % (1000 * 60 * 60 * 24 * 365.25)) % (1000 * 60 * 60 * 24 * 30.44) / (1000 * 60 * 60 * 24));
let mensaje3 = `${dias} dia(s)`;
  if (dias == 0) {
     mensaje3 = ` `;
  }
  // Mostramos el resultado
  return(`tiene ${mensaje1} ${mensaje2} ${mensaje3} en la organización.`);

}

//funcion que verifica si existe una fecha
export function existeFecha(fecha){
  var fechaf = fecha.split("-");
  var day = fechaf[2];
  var month = fechaf[1];
  var year = fechaf[0];
  var date = new Date(year,month,'0');
  if((day-0)>(date.getDate()-0)){
        return false;
  }
  return true;
}
//funcion que verifica que una fecha sea menor o igual 
//a la actual
export function validarFechaMenorActual(date) {
  var actual = new Date();
  var fecha = new Date(date);
  
      if (actual >= fecha) {
        return true;
      }else{
        return false;
      }
}  

//función que valida fechas
export function validarFecha(fecha2) {  
   
  try{        
    var fecha = fecha2.split("-");        
    var dia = fecha[2];        
    var mes = fecha[1];        
    var ano = fecha[0];        
    var estado = true;  
     
    if ((dia.length == 2) && (mes.length == 2) && (ano.length == 4)) {        
      switch (parseInt(mes)) {        
        case 1:dmax = 31;break;        
        case 2: if (ano % 4 == 0) dmax = 29; else dmax = 28;        
        break;        
        case 3:dmax = 31;break;        
        case 4:dmax = 30;break;        
        case 5:dmax = 31;break;        
        case 6:dmax = 30;break;        
        case 7:dmax = 31;break;        
        case 8:dmax = 31;break;        
        case 9:dmax = 30;break;        
        case 10:dmax = 31;break;       
        case 11:dmax = 30;break;      
        case 12:dmax = 31;break;       
      }  
          
      dmax!=""?dmax:dmax=-1;if ((dia >= 1) && (dia <= dmax) && (mes >= 1) && (mes <= 12)) {        
      for (var i = 0; i < fecha[0].length; i++) {         
        diaC = fecha[0].charAt(i).charCodeAt(0);        
        (!((diaC > 47) && (diaC < 58)))?estado = false:'';       
        mesC = fecha[1].charAt(i).charCodeAt(0);        
        (!((mesC > 47) && (mesC < 58)))?estado = false:'';       
      }  
     
    } for (var i = 0; i < fecha[2].length; i++) {  
     
    anoC = fecha[2].charAt(i).charCodeAt(0);  
     
    (!((anoC > 47) && (anoC < 58)))?estado = false:'';        
    }} else estado = false;        
    return estado;    
      
  }catch(err){  
    return false;    
  }
}
