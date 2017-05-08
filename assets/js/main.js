function miembroSquad(id, foto, nombre, edad, hobbies){
	this.id = id;
	this.foto = foto;
	this.nombre = nombre;
	this.edad = edad;
	this.hobbies = hobbies;
	this.coment = [];
}

var arr =[
	new miembroSquad(1,"eevee.png","Gaby Bravo", "28 años", ["pintar", "ver anime", "jugar Aion"]),
	new miembroSquad(2,"growlithe.png","Karina Laroze", "21 años", ["bailar"]),
	new miembroSquad(3,"oddish.png","Mily Rivas", "18 años", ["leer", "ver películas"]),
	new miembroSquad(4,"snorlax.png","Marcela Orellana", "31 años", ["Andar en Bicicleta", "ver series coreanas"]),
	new miembroSquad(5,"psyduck.png","Angela Aliaga", "32 años", ["leer", "escuchar música", "jugar donkey kong country"]),
	new miembroSquad(6,"horsea.png","Dani Riesco", "35 años", ["ver películas"])
];

var miDiv = document.getElementById("miembras");

arr.forEach(mostrarSquad);
function mostrarSquad(value){
	var divAux = document.createElement("div");
	var parrafo1 = document.createElement("p"); 
	var ul = document.createElement("ul");
	var comentario = document.createElement("textarea");
		comentario.id = value.id;
	var button = document.createElement("input");
	    button.type = "button";
	    button.value = "Comentar";

	parrafo1.innerHTML = "<img src=" + value.foto + " height='100' width='100'><br>"
						+"<b>Nombre: </b>" + value.nombre + "<br>"
						 + "<b>Edad: </b>" + value.edad + "<br>" 
						 + "<b>Hobbies: </b>" ;
	divAux.appendChild(parrafo1);

	value.hobbies.forEach(function(val){
 		var ul = document.createElement("ul");
		var lista = document.createElement("li");
		var text = document.createTextNode(val + "  ");
		lista.appendChild(text);
		ul.appendChild(lista);
		divAux.appendChild(ul);
		});

	divAux.appendChild(comentario);
	divAux.appendChild(button);

	button.onclick = function(){
		var comentarios = document.createElement("p");
		var likes = document.createElement("a");
			likes.href='#';
		var br = document.createElement("br");

		var coments = document.getElementById(comentario.id).value;
		
		var text = document.createTextNode(coments);
		var text2 = document.createTextNode(" Me Gusta ");
		likes.appendChild(text2);
		comentarios.appendChild(text);
		comentarios.appendChild(likes);
		divAux.appendChild(comentarios);
    	value.coment.push(coments);
	}

	miDiv.appendChild(divAux);

}