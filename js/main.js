function agregaPosteo() {
//escribe aca el codigo
var containerPosteos = document.getElementById("contenedor-posteos");
var nombreFF = document.getElementById("nombre").value;
var contenidoFF = document.getElementById("cajaposteos").value;


//Creación del nodo elemento donde ira el post.
var nuevoPost = document.createElement("strong");

//creación de elementos donde se guardaran los valores.
var contenedorNombre = document.createElement("strong");
var contenedorPost = document.createElement("p");
var separacion = document.createElement("hr");


// Elemento para corazón:
var parrafCorazon = document.createElement("p");
var i = document.createElement("i");

//Asignar padre a icono corazón:
parrafCorazon.appendChild(i);

//Dar atributos a corazón:
parrafCorazon.setAttribute("class", "corazón");
i.setAttribute("class", "fa fa-heart");
i.setAttribute("arial-hidden", "true");


// Ahora se transformara  el nombre a nodo texto.
var nodoNombre = document.createTextNode(nombreFF + " escribio:");
var nodoPosteo = document.createTextNode(contenidoFF);

//asignación  de padres a nodos creados:
contenedorNombre.appendChild(nodoNombre);
contenedorPost.appendChild(nodoPosteo);

//Ahora asignamos padres a nombre y contenido. 
nuevoPost.appendChild(contenedorNombre);
nuevoPost.appendChild(contenedorPost);
nuevoPost.appendChild(parrafCorazon);
nuevoPost.appendChild(separacion);


//addEventListener():es un metodo que agrega un "escuchador" al elemento que este atento a la interaccion del usuario.
//toggle():si el elemento tiene la clase, se la quita, de lo contrario la agrega.
//Creación funcion click para el corazón y asignación de la clase rojo CSS:
i.addEventListener("click", function(){
	i.classList.toggle("rojo");
});

//Finalmente se le da atributos al post y se agrega al contenero-posteos.

nuevoPost.setAttribute("class", "posteo");
containerPosteos.appendChild(nuevoPost);

//Para resetear los campos y dejarlos en blanco nuevamente

document.getElementById("nombre").value = "";
document.getElementById("cajaposteos").value = "";

}