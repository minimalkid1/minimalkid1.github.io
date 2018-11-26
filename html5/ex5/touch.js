document.getElementById("id_business_version").innerHTML="Business version: 2018.11.26.2";

var canvas = document.getElementById("id_canvas");
canvas.addEventListener("touchstart", on_touch_start);

var canvas_bounding_rect = canvas.getBoundingClientRect();

function on_touch_start(e)
{
	for(var i=0; i < e.changedTouches.length; i++)
	{
	var context = canvas.getContext("2d");
	context.beginPath();
	context.arc(e.changedTouches.item(i).pageX -canvas_bounding_rect.left , 
	e.changedTouches.item(i).pageY - canvas_bounding_rect.top , 10 , 0 , 2 * Math.PI);
	context.stroke();
	}
}