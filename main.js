var color="";
var mouseEvent = "";
var LastX, LastY;
canvas=document.getElementById("canvas1");
kavya=canvas.getContext("2d");

canvas.addEventListener("mousedown",MD);
function MD(e)
{
    mouseEvent="mousedown";
    color=document.getElementById("color").value;
    circle(x,y);
}
canvas.addEventListener("mousemove",MM);
function MM(e)
{
    x=e.clientX-canvas.offsetLeft;
    y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown")
    {kavya.beginPath();
    kavya.strokeStyle=color;
    circle(x,y);}
}
function circle(x,y)
{
    kavya.beginPath();
    kavya.strokeStyle=color;
    kavya.lineWidth=2;
    kavya.arc(x,y,60,0,2*Math.PI);
    kavya.stroke(); 
}
canvas.addEventListener("mouseup",MU);
function MU(e)
{
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",ML);
function ML(e)
{
    mouseEvent="mouseleave";
}
function clear1()
{
    kavya.clearRect(0,0,canvas.width,canvas.height);
} 



