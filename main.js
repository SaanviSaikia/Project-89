var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 1;

    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") 
        {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        
        console.log("Last position of x and y coordinates = ");
        console.log(" X - " + last_position_of_x + "Y - " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        
    
        console.log("Current position of x and y coordinates = ");
        console.log(" X - " + cuurent_position_of_mouse_x + "Y - " + current_position_of_mouse_y);    
         ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
         ctx.stroke();
        }

    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseup";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

var last_position_of_x, last_position_of_y;

var width = screen.width;

new_width = screen.width - 70;
  new_height = screen.height - 300;

if(width < 992)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) 
{
    console.log("touchstart");
    //Additional Activity
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    //End Additional Activity
         
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) 
{
    current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
   
    console.log("Last position of x and y coordinates = ");
    console.log(" X - " + last_position_of_x + "Y - " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);
    

    console.log("Current position of x and y coordinates = ");
    console.log(" X - " + current_position_of_mouse_x + "Y - " + current_position_of_mouse_y);    
     ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
     ctx.stroke();
        
     last_position_of_x = current_position_of_mouse_x;
     last_position_of_y = current_position_of_mouse_y;
   
}

//Additional Activity
function clearArea()
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}





    

