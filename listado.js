let elementos = [
    {nombre:"Mandarina", categoria:"fruta"},
    {nombre:"Banana", categoria:"fruta"},
    {nombre:"Kiwi", categoria:"fruta"},
    {nombre:"Papa", categoria:"verdura"},
    {nombre:"Lechuga", categoria:"verdura"},
    {nombre:"Zanahoria", categoria:"verdura"}
];

let contenedor = document.getElementById("contenedor");

function mostrarElementos(lista){

    contenedor.innerHTML = "";

    lista.forEach(function(elemento){

        contenedor.innerHTML += `
            <div class="tarjeta">
                <h3>${elemento.nombre}</h3>
                <p>Categoría: ${elemento.categoria}</p>
            </div>
        `;

    });

}

mostrarElementos(elementos);

document.getElementById("todos")
.addEventListener("click", function(){

    mostrarElementos(elementos);

});

document.getElementById("frutas")
.addEventListener("click", function(){

    let frutas = elementos.filter(function(elemento){

        return elemento.categoria === "fruta";

    });

    mostrarElementos(frutas);

});