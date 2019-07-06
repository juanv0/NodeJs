var http = require("http");
var url = require("url");

function iniciar(route, handle){
	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log("Peticion para "+ pathname + " recibida.");
		var chunks = "";
		let body = [];
		if (request.method == 'POST'){
			request.on('data', chunk => {
				chunks += chunk;
				
			});
			request.on('end', () => {

				route(handle, pathname, chunks, response);
			});
		} else {
			
			route(handle, pathname, body, response);
		}
	}
	
	http.createServer(onRequest).listen(8080);
	console.log("Servidor Iniciado");
}

exports.iniciar = iniciar;