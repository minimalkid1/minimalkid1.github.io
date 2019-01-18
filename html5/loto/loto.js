document.getElementById("id_business_version").innerHTML="Business version: 2019.01.18.1";
document.getElementById("id_start_button").addEventListener("click", start);
document.getElementById("id_stop_button").addEventListener("click", stop);

var w;

function start()
{
	if(typeof(Worker) !== "undefined")
	{
		if(typeof(w) == "undefined")
		{
			w = new Worker("primul_numar.js");
		}
		w.onmessage = function(e)
		{
			document.getElementById("1Numar").innerHTML = e.data;
		};
	}
}

function stop()
{
	w.terminate();
	w = undefined;
}
