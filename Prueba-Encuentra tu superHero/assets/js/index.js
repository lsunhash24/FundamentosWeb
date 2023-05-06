//método que permite ejecutar jquery una vez que se
//han cargados los elementos Html al DOM
$(document).ready(function() {

    //se agrega el evento submit al formulario
    //que recibe como paramatero "event" (que es el evento
    //que corresponde al elemento "form")
    $("Form").submit(function(event) {
        //neutralizacion del evento
        event.preventDefault();
        //se crea variable para almacenar el valor del input
        //con manejo del dom
        let valorInput = $("#numeroHero").val();
        //se crea variable para validar datos
        let encontrar = false;
        //uso de metodo ajax de jquery para generar la consulta a la api
        $.ajax({
            type: "GET",
            url: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json",
            dataType: "json",
            //funcion que recibe los datos de la consulta
            success: function(data) {
                //como los datos consultados son de tipo arreglo
                // se recorren para buscar el id del heroe consultado
                data.forEach(function(heroe) {

                    if (heroe.id == valorInput) {

                        encontrar = true
                            //si el id es encontrado se interpolan los datos
                            //requeridos de la data (llamada heroe) hacia el
                            //template html mediante jquery, este template 
                            // corresponde a una card traida desde boostrap
                            //donde se insertar los datos mediante notacion
                            //backstick con las variables placeholders 
                        $("#heroInfo").html(`
                                <h5 class="text-center">SuperHero Encontrado</h5>
                                <div class="card" style="max-width: 760px;">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src="${heroe.images.lg}" class="img-fluid rounded-start" alt="imgHero">
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h4 class="card-title">Nombre: ${heroe.name}</h4>
                                                <p class="card-text"><strong>Conexiones:</strong> ${heroe.connections.groupAffiliation}</p>
                                                <br>
                                                <p class="card-text mx-4"><i>Publicado por:</i> ${heroe.biography.publisher}</p>
                                                <hR>
                                                <p class="card-text"><i><strong>Ocupacion:</strong></i>  ${heroe.work.occupation}</p>
                                                <hR>
                                                <p class="card-text"><i><strong>Primera aparicion:</strong></i> ${heroe.biography.firstAppearance}</p>
                                                <hR>
                                                <p class="card-text"><i><strong>Altura:</strong></i> ${heroe.appearance.height[0]} - ${heroe.appearance.height[1]}</p>
                                                <hR>
                                                <p class="card-text"><i><strong>Peso:</strong></i> ${heroe.appearance.weight[0]} - ${heroe.appearance.weight[1]}</p>
                                                <hR>
                                                <p class="card-text"><i><strong>Alianzas:</strong></i> ${heroe.biography.aliases}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `)
                            //uso de CanvasJs para la renderizacion de una gráfica interactiva
                            // que muestra estadisticas del heroe

                        //se declara una variable que contiene el objeto de configuración
                        //del gráfico
                        let config = {
                            animationEnabled: true,
                            title: {
                                text: `"Estadisticas de poder para ${heroe.name}"`
                            },
                            legend: {
                                cursor: "pointer",
                            },
                            data: [{
                                    type: "pie",
                                    showInLegend: true,
                                    toolTipContent: "{name}: <strong>{y}</strong>",
                                    indexLabel: "{name} - {y}",
                                    //se agrega el modelo de datos para la estadisticas
                                    //que son atributos de la data
                                    dataPoints: [
                                        { y: heroe.powerstats.intelligence, name: "intelligence" },
                                        { y: heroe.powerstats.strength, name: "strenght" },
                                        { y: heroe.powerstats.speed, name: "speed" },
                                        { y: heroe.powerstats.durability, name: "durability" },
                                        { y: heroe.powerstats.power, name: "power" },
                                        { y: heroe.powerstats.combat, name: "combat" }
                                    ]

                                },

                            ],

                        };
                        //se crea instancia del grafico recibiendo como
                        //parametros el contenedor html y el objeto de configuración
                        let chart = new CanvasJS.Chart("heroStats", config);

                        chart.render();
                    }

                });
                //validación en caso que el valor no corresponda o no se encuentre
                //el id consultado
                if (encontrar == false) {
                    alert("Id Ingresado no existe o dato no válido");
                }

            },
            //error en caso que falle el acceso a la api
            error: function(data) {
                alert("Error al accesar la Api")
            },

        });

    });

});