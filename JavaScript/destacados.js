let tarjetas = document.querySelectorAll(".tarjeta");

tarjetas.forEach(function(tarjeta){

    tarjeta.addEventListener("click", function(){

        tarjeta.classList.toggle("seleccionada");

        let cantidad =
        document.querySelectorAll(".seleccionada").length;

        document.getElementById("contador").textContent =
        "Seleccionadas: " + cantidad;

    });

});