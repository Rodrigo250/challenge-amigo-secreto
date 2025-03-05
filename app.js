// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigos = [];

//funcion para agregar nombres
function agregarAmigo(){
    input = document.getElementById("amigo");
    nombre = input.value.trim();
    

    //validar que el input no este vacio
    if (nombre === ""){
        alert("Por favor ingrese un nombre válido");
        return;
    }

    //verificar que el nombre no este repetido

    if(nombreAmigos.includes(nombre)){
        alert("Ese nombre ya está en la lista");
        return;
    }
    
    //limpiar el input
    input.value ="";

    nombreAmigos.push(nombre);

    mostrarLista();
}

function mostrarLista(){
    lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //limpiar lista antes de actualizar

    //recorrer el array y crear elementos
    nombreAmigos.forEach((nombre) =>{
        li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);

    });
}
function sortearAmigo(){
    if (nombreAmigos.length === 0){
        alert("No hay nombres en la lista para sortear");
        return;
    }

    //elegir un indice aleatorio del array
    indiceAleatorio = Math.floor(Math.random()* nombreAmigos.length);
    ganador = nombreAmigos[indiceAleatorio];

    //Mostrar el resultado
    document.getElementById("resultado").textContent = `El amigo secreto es: ${ganador}! `;

    nombreAmigos =[];
    mostrarLista();

}







