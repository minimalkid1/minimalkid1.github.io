document.getElementById("id_business_version").innerHTML="Business version: 2018.11.26.10";

var canvas = document.getElementById("id_canvas");
canvas.addEventListener("touchstart", on_touch_start);
canvas.addEventListener("touchmove", on_touch_move);
canvas.addEventListener("touchmove", on_touch_end);

var canvas_bounding_rect = canvas.getBoundingClientRect();

var last_pos = {x: 0, y: 0 , id: 0};

var positii = {};

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
	var last_pos = {x: e.changedTouches.item(i).pageX, y: e.changedTouches.item(i).pageY , id: e.changedTouches.item(i).identifier};
	pozitii.push(last_pos);
	}
}

function on_touch_move(e)
{
	e.preventDefault();
	
	for(var i=0; i < e.changedTouches.length; i++)
	{
		var j =0;
		for(; j < pozitii.length; j++)
			if(pozitii(j).id == e.changedTouches.item(i).identifier)
				break;
			
	var context = canvas.getContext("2d");
	context.beginPath();
	context.lineWidth = 20;
	context.moveTo(pozitii(j).x -canvas_bounding_rect.left, pozitii(j).y -canvas_bounding_rect.top);
	context.lineTo(e.changedTouches.item(i).pageX -canvas_bounding_rect.left , e.changedTouches.item(i).pageY - canvas_bounding_rect.top);
	context.stroke();
	context.beginPath();
	context.lineWidth = 1;
	context.arc(e.changedTouches.item(i).pageX -canvas_bounding_rect.left , 
	e.changedTouches.item(i).pageY - canvas_bounding_rect.top , 10 , 0 , 2 * Math.PI);
	context.stroke();
	
	pozitii(j).x = e.changedTouches.item(i).pageX;
	pozitii(j).y = e.changedTouches.item(i).pageY;
	
	}
}

function on_touch_end(e)
{
	
}