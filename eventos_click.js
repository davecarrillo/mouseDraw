var estado = 0;
var x;
var y;
var color = "red";

document.addEventListener("mousedown", presionarMouse);
document.addEventListener("mouseup", soltarMouse);
document.addEventListener("mousemove", dibujarMouse);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");

dibujarLinea("black", 149, 149, 151, 151, papel);
dibujarLinea("black", 0, 0, 0, 300, papel);
dibujarLinea("black", 0, 0, 300, 0, papel);
dibujarLinea("black", 300, 0, 300, 300, papel);
dibujarLinea("black", 0, 300, 300, 300, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{ 
   lienzo.beginPath();
   lienzo.strokeStyle = color;
   lienzo.lineWidth = 3;
   lienzo.moveTo(xinicial, yinicial);
   lienzo.lineTo(xfinal, yfinal);
   lienzo.stroke();
   lienzo.closePath(); 
}

function presionarMouse(evento)
{
    estado = 1;
    x = evento.layerX;
    y = evento.layerY;
    dibujarLinea(color, x, y, evento.layerX, evento.layerY, papel);
}

function soltarMouse(evento)
{
    estado = 0;
    x = evento.layerX;
    y = evento.layerY;
    dibujarLinea(color, x, y, evento.layerX, evento.layerY, papel);
}

function dibujarMouse(evento)
{

    if(estado == 1);
    dibujarLinea(color, x, y, evento.layerX, evento.layerY, papel);
}