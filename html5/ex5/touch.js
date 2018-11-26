document.getElementById("id_business_version").innerHTML="Business version: 2018.11.26.0";

var canvas = document.getElementById("id_canvas");
canvas.addEventListener("touchstart", on_touch_start);

function on_touch_start(e)
{
	for(var i=0; i < e.changedTouches.lenght; i++)
	{
	var context = canvas.getContext("2d");
	context.beginPath();
	context.arc(e.changedTouches.item[i].pageX , e.changedTouches.item[i].pageY , 10 , 0 , 2 * Math.PI);
	context.stroke();
	}
}