var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {
        //Addictonal Activity start
        //color = document.getElementById("color").value;
        //width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {

         current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }
















    var width = screen.width;
    var currentwidth = screen.width -70;
    var currentheight = screen.height -110;
    if(width<992){
        document.getElementById("myCanvas").width=currentwidth;
        document.getElementById("myCanvas").height=currentheight;
    }
    canvas.addEventListener("touchstart",my_touchstart);
    function my_touchstart(e){
        //color = document.getElementById("color").value;
        //width_of_line = document.getElementById("width_of_line").value;
        last_position_of_x_t = e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y_t = e.touches[0].clientY-canvas.offsetTop;
        
    }
    canvas.addEventListener("touchmove",my_touchmove);


    function my_touchmove(e){
        console.log("Move");
        current_position_of_mouse_x_t =  e.touches[0].clientX-canvas.offsetLeft;
        current_position_of_mouse_y_t = e.touches[0].clientY-canvas.offsetTop;
     
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;




        console.log("The last position of The mouse is ");
      console.log("x= "+last_position_of_x_t+"y= "+last_position_of_y_t);
      ctx.moveTo(last_position_of_x_t,last_position_of_y_t);
      console.log("The current position of The mouse is ");
      
      console.log("x= "+current_position_of_x_t+"y= "+current_position_of_y_t);
     
      ctx.lineTo(current_position_of_mouse_x_t,current_position_of_mouse_y_t);
    
     last_position_of_x_t = current_position_of_x_t;
     last_position_of_y_t = current_position_of_y_t;
     ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.stroke();


    }


