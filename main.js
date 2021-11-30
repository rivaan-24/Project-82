var color = "Red";
var radius = "43";
var line_width = "2";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

mouseEvent = "";

canvas.addEventListener("mousedown", my_Mousedown);
function my_Mousedown(e){
    color = document.getElementById("colortextInput").value;
    radius = document.getElementById("radiustextInput").value;
    line_width = document.getElementById("widthtextInput").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup", my_Mouseup);
function my_Mouseup(){
    mouseEvent = "mouseup"
}
canvas.addEventListener("mouseleave", my_Mousedisappear);
function my_Mousedisappear(){
    mouseEvent = "mouseleave"
}
canvas.addEventListener("mousemove", my_Mousemove);
function my_Mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if (mouseEvent == "mouseDown") {
    console.log("Current position of x and y coordinates = " + current_position_of_mouse_x + " and " + current_position_of_mouse_y);
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = line_width;
  ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
  ctx.stroke();
}
lastX = current_position_of_mouse_x;
lastY = current_position_of_mouse_y;
}
function button_Erase(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}