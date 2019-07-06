var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;
handle["/toxml"] = requestHandlers.toxml;
handle["/tojson"] = requestHandlers.tojson;


server.iniciar(router.route, handle);