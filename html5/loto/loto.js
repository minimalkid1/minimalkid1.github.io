document.getElementById("id_business_version").innerHTML="Business version: 2019.01.18.2";
document.getElementById("id_start_button").addEventListener("click", start);
document.getElementById("id_stop_button").addEventListener("click", stop);

var w1;

function start()
{
	if(typeof(Worker) !== "undefined")
	{
		if(typeof(w1) == "undefined")
		{
			w1 = new Worker("primul_numar.js");
		}
		w1.onmessage = function(e)
		{
			document.getElementById("1Numar").innerHTML = e.data;
		};
	}
}

function stop()
{
	w1.terminate();
	w1 = undefined;
}
