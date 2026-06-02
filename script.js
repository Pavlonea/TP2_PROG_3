let meriendas = [
    "Yogur",
    "Fruta",
    "Tostadas",
    "Barrita de cereal",
    "Licuado"
];

let lista = document.getElementById("listaMeriendas");

meriendas.forEach(function(merienda){

    lista.innerHTML += `
        <div class="tarjeta">
            <p>${merienda}</p>
        </div>
    `;

});

document.getElementById("botonCantidad")
.addEventListener("click", function(){

    document.getElementById("resultado").textContent =
    "Cantidad: " + meriendas.length + " meriendas.";

});