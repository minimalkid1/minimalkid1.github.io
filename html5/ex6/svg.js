document.getElementById("id_business_version").innerHTML="Business version: 2018.12.03.4";
window.addEventListener("deviceorientation",on_device_orientation);

function on_device_orientation(e)
{
	
	var svg = document.getElementById ("id_svg");
	var circle = document.getElementById ("id_circle");
	
	var R = 20;
	
	circle.setAttribute('cx', '(svg.width / 2 + e.gamma / 90 * (svg.width / 2 - R)');
	circle.setAttribute('cx', '(svg.height / 2 + e.beta / 90 * (svg.height / 2 - R)');
}