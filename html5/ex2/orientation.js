document.getElementById("id_business_version").innerHTML="Business version: 2018.10.29.1";
window.addEventListener("deviceorientation",on_device_orientation);

function on_device_orientation(e)
{
	document.getElementById("id_alpha").innerHTML = e.alpha;
	document.getElementById("id_beta").innerHTML = e.beta;
	document.getElementById("id_gama").innerHTML = e.gamma;
}