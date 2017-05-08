function miembroSquad(id, foto, nombre, edad, hobbies){
	this.id = id;
	this.foto = foto;
	this.nombre = nombre;
	this.edad = edad;
	this.hobbies = hobbies;
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

var divAux, textAux1, textAux2, textAux3;
var cont = 0;
var textAux6;
arr.forEach(mostrarSquad);

function mostrarSquad(value){
	var divAux = document.createElement("div");
	var parrafo1 = document.createElement("p"); 
	var textAux1 = document.createTextNode("Nombre: " + value.nombre);

	var parrafo2 = document.createElement("p");
	var textAux2 = document.createTextNode("Edad: " + value.edad );

	var parrafo4 = document.createElement("p");
	var textAux4 = document.createTextNode("Hobbies:");

	var oImg = document.createElement("img");
		oImg.setAttribute('src', value.foto);
		oImg.setAttribute('alt', 'na');
		oImg.setAttribute('height', '100px');
		oImg.setAttribute('width', '100px');
		

	var comentario = document.createElement("textarea");
	comentario.name = 'post';
	comentario.id = value.id;

	var parrafo5 = document.createElement("p");
		parrafo5.id = "opinion";
	var parrafo6 = document.createElement("p");
	

	var link = document.createElement("a");

	var linea = document.createElement("hr");

	//var coment = [];

	divAux.appendChild(linea);

	divAux.appendChild(oImg);

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
    	var br = document.createElement("br");
    
    	parrafo5.innerHTML += coment + " <a href='#' onclick='showLikes("+ comentario.id +")'>" + " Me Gusta" +"</a>" + "<br>";
    	textAux6 = document.createTextNode(cont);
    	
    		/*var textAux5 = document.createTextNode(coment + "   ");
    		var linkText = document.createTextNode("Me Gusta   ");
	    	link.title = "my title text";
			link.href = "#";
			var br = document.createElement("br");
	    	link.appendChild(linkText);
	    	parrafo5.appendChild(textAux5);
	    	link.appendChild(br);
	    	parrafo5.appendChild(link);
	    	parrafo5.appendChild(br);*/
	    	parrafo5.appendChild(textAux6);
	    	parrafo5.appendChild(br);
	    	
	    	divAux.appendChild(parrafo5);
    	   	

    };
    divAux.appendChild(button);

    miDiv.appendChild(divAux);



}
function showLikes(contId){
		
    	cont ++;
    	
    	textAux6.innerHTML = cont;
    	console.log(cont);
    }