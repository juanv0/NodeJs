var exec = require("child_process").exec;

function iniciar(response){
	console.log("Manipulador de peticion 'iniciar' ha sido llamado");
	exec("ls -lah", function (error, stdout, stderr){
		response.writeHead(200, {"Content-Type":"text/html"});
		response.write(stdout);
		response.end();
	});
}


function subir(response){
	console.log("Manipulador de peticion 'subir' ha sido llamado");
	response.writeHead(200, {"Content-Type":"text/html"});
	response.write("Hola Subir");
	response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;
