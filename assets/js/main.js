function miembroSquad(nombre, edad, hobbies){
	this.nombre = nombre;
	this.edad = edad;
	this.hobbies = hobbies;
}

var arr =[
	new miembroSquad("Gaby Bravo", "28 años", ["pintar", "ver anime", "jugar Aion"]),
	new miembroSquad("Karina Laroze", "21 años", ["bailar"]),
	new miembroSquad("Mily Rivas", "18 años", ["leer", "ver películas"]),
	new miembroSquad("Marcela Orellana", "31 años", ["Andar en Bicicleta", "ver series coreanas"])
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

	parrafo1.appendChild(textAux1); 
	divAux.appendChild(parrafo1); 

    parrafo2.appendChild(textAux2); 
    divAux.appendChild(parrafo2);

    miDiv.appendChild(divAux);


}
