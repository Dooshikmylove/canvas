var c = document.getElementById("canvas");
var cxt = c.getContext("2d");

cxt.font = "40px Calibri, Arial";  // Fuente para el texto
cxt.fillText("Un texto",50,50);  // Texto relleno

cxt.font = "40px Book Antiqua, Sans-serif";
cxt.strokeText("Otro texto",50,100); // Texto contornos



var c = document.getElementById("miscanvas");
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





var c = document.getElementById("micanvas");
var cxxt = c.getContext("2d");

// Dijujamos un castillo
cxxt.beginPath();
cxxt.moveTo(30,30);
cxxt.lineTo(40,30);
cxxt.lineTo(40,40);
cxxt.lineTo(50,40);
cxxt.lineTo(50,30);
cxxt.lineTo(60,30);
cxxt.lineTo(60,40);
cxxt.lineTo(70,40);
cxxt.lineTo(70,30);
cxxt.lineTo(80,30);
cxxt.lineTo(80,40);
cxxt.lineTo(90,40);
cxxt.lineTo(90,30);
cxxt.lineTo(100,30);
cxxt.lineTo(100,90);
cxxt.lineTo(30,90);
cxxt.closePath(); // Cierra la figura como si usasemos cxxt.lineTo(30,50);
cxxt.stroke();

// Dibujamos el palo de la bandera
cxxt.strokeStyle = "brown";
cxxt.beginPath();
cxxt.moveTo(55,30);
cxxt.lineTo(55,10);
cxxt.stroke();

// Dibujamos una bandera
cxxt.fillStyle = "green";
cxxt.beginPath();
cxxt.moveTo(55,10);
cxxt.lineTo(65,15);
cxxt.lineTo(55,20);
cxxt.fill();  // Cierra la figura y rellena

// Dibujamos la puerta
cxxt.fillStyle = "brown";
cxxt.beginPath();
cxxt.moveTo(55,90);
cxxt.lineTo(55,75);
cxxt.lineTo(65,70);
cxxt.lineTo(75,75);
cxxt.lineTo(75,90);
cxxt.closePath(); // Cierra la figura
cxxt.fill(); // Y la rellena