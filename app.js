var c = document.getElementById("canvas");
var cxt = c.getContext("2d");

cxt.font = "40px Calibri, Arial";  // Fuente para el texto
cxt.fillText("Un texto",50,50);  // Texto relleno

cxt.font = "40px Book Antiqua, Sans-serif";
cxt.strokeText("Otro texto",50,100); // Texto contornos



var c = document.getElementById("micanvas");
var cxtt = c.getContext("2d");
 
var imagen = new Image(); // Crea una imagen para luego poder mostrarla
imagen.src = 'Jeff Satur.jpeg'; // Se define la ruta de la imagen
imagen.onload = function(){ // Mediante el evento onload se espera a que se cargue la imagen
    cxtt.drawImage(imagen, 50, 50); // Dibuja la imagen en la posicion indicada
} 

// Otra alternativa
var img = document.getElementById("imagen"); // Recupera una imagen del html mediante su id
cxtt.drawImage(img, 50, 50, 200, 140); // Dibuja la imagen en la posicion indicada y con un tamaño de 200x140

// Rellenar un objeto con una imagen
var patron = context.createPattern(imagen, repeat-x);
cxtt.fillStyle = patron;
cxtt.fillRect(10,10,200,200);