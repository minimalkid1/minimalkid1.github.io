
function f(resolve, reject)
{
	resolve(":)")
}

function on_success(e)
{
	console.log("success" + e);
}

function on_failure(e)
{
	console.log("failure" + e);
}

function start()
{
	console.log("before promise is created");
	
	var promise = new Promise(f);
	
	promise.then(on_success, on_failure);
	
	console.log("End of start funtion");
}