document.getElementById("id_business_version").innerHTML="Business version: 2018.12.03.5";
window.addEventListener("deviceorientation",on_device_orientation);

function on_device_orientation(e)
{
	
	var svg = document.getElementById ("id_svg");
	var circle = document.getElementById ("id_circle");
	
	var R = 20;
	svg_width = svg.getAttribute("width");
	svg_height = svg.getAttribute("height");
	
	circle.setAttribute('cx', (svg_width / 2 + e.gamma / 90 * (svg_width / 2 - R));
	circle.setAttribute('cx', (svg_height / 2 + e.beta / 90 * (svg_height / 2 - R));
}