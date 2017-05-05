function miembroSquad(id, nombre, edad, hobbies){
	this.id = id;
	this.nombre = nombre;
	this.edad = edad;
	this.hobbies = hobbies;
}

var arr =[
	new miembroSquad("gaby","Gaby Bravo", "28 años", ["pintar", "ver anime", "jugar Aion"]),
	new miembroSquad("karina","Karina Laroze", "21 años", ["bailar"]),
	new miembroSquad("mily","Mily Rivas", "18 años", ["leer", "ver películas"]),
	new miembroSquad("marcela","Marcela Orellana", "31 años", ["Andar en Bicicleta", "ver series coreanas"]),
	new miembroSquad("angela","Angela Aliaga", "32 años", ["leer", "escuchar música", "jugar donkey kong country"]),
	new miembroSquad("dani","Dani Riesco", "35 años", ["ver películas"])
];

var miDiv = document.getElementById("miembras");

var divAux, textAux1, textAux2, textAux3;

arr.forEach(mostrarSquad);

function mostrarSquad(value){
	var divAux = document.createElement("div");
	var parrafo1 = document.createElement("p"); 
	var textAux1 = document.createTextNode("Nombre: " + value.nombre);

	var parrafo2 = document.createElement("p");
	var textAux2 = document.createTextNode("Edad: " + value.edad );

	var parrafo4 = document.createElement("p");
	var textAux4 = document.createTextNode("Hobbies:");

	var comentario = document.createElement("textarea");
	comentario.name = 'post';
	comentario.id = value.id;

	var parrafo5 = document.createElement("p");

	var link = document.createElement("a");


	var linea = document.createElement("hr");
	divAux.appendChild(linea);

	parrafo1.appendChild(textAux1); 
	divAux.appendChild(parrafo1); 

    parrafo2.appendChild(textAux2); 
    divAux.appendChild(parrafo2);

    parrafo4.appendChild(textAux4); 
    divAux.appendChild(parrafo4);

 	value.hobbies.forEach(function(val){
 		var ul = document.createElement("ul");
		var parrafo3 = document.createElement("li");
		var textAux3 = document.createTextNode(val + "  ");

		parrafo3.appendChild(textAux3);
		ul.appendChild(parrafo3);
		divAux.appendChild(ul);  

	}); 

	divAux.appendChild(comentario);

	var button = document.createElement("input");
    button.type = "button";
    button.value = "Comentar";
    button.onclick = function(){ 
    	var coment = document.getElementById(comentario.id).value;
    	var textAux5 = document.createTextNode(coment);
    	parrafo5.appendChild(textAux5);
    	divAux.appendChild(parrafo5);
    	};
    divAux.appendChild(button);

    miDiv.appendChild(divAux);

}
