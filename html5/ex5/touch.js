document.getElementById("id_business_version").innerHTML="Business version: 2018.11.26.8";

var canvas = document.getElementById("id_canvas");
canvas.addEventListener("touchstart", on_touch_start);
canvas.addEventListener("touchmove", on_touch_move);

var canvas_bounding_rect = canvas.getBoundingClientRect();

var last_pos = {x: 0, y: 0};

function on_touch_start(e)
{
	for(var i=0; i < e.changedTouches.length; i++)
	{
		e.preventDefault();
		
	var context = canvas.getContext("2d");
	context.beginPath();
	context.arc(e.changedTouches.item(i).pageX -canvas_bounding_rect.left , 
	e.changedTouches.item(i).pageY - canvas_bounding_rect.top , 10 , 0 , 2 * Math.PI);
	context.stroke();
	last_pos.x = e.changedTouches.item(i).pageX;
	last_pos.y = e.changedTouches.item(i).pageY;
	}
}

function on_touch_move(e)
{
	e.preventDefault();
	
	for(var i=0; i < e.changedTouches.length; i++)
	{
	var context = canvas.getContext("2d");
	context.beginPath();
	context.lineWidth = 20;
	context.moveTo(last_pos.x -canvas_bounding_rect.left, last_pos.y -canvas_bounding_rect.top);
	context.lineTo(e.changedTouches.item(i).pageX -canvas_bounding_rect.left , e.changedTouches.item(i).pageY - canvas_bounding_rect.top);
	context.lineWidth = 1;
	context.arc(e.changedTouches.item(i).pageX -canvas_bounding_rect.left , 
	e.changedTouches.item(i).pageY - canvas_bounding_rect.top , 10 , 0 , 2 * Math.PI);
	context.stroke();
	
	last_pos.x = e.changedTouches.item(i).pageX;
	last_pos.y = e.changedTouches.item(i).pageY;
	}
}