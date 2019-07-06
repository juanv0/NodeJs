var jtx = require("./json2xml");
var xtj = require("./xmlToJson");
var xtj = require("./xml2json")
var DOMParser = require('xmldom').DOMParser;

function toxml(body, response){
	if (body == ""){
		response.writeHead(400, {"Content-Type":"text/html"});
		response.write("Bad Rquest");
		response.end();
	} else {
		var toConv = jtx.json2xml(JSON.parse(body))
		response.writeHead(200, {"Content-Type":"application/xml"});
		response.write(toConv);
		response.end();
	}
}
function tojson(body, response){
	console.log('en la funcion tojson');
	var string = body;
	if(body=""){
		response.writeHead(400, {"Content-Type":"text/html"});
		response.write("Bad Rquest");
		response.end();
	} else {

		const doc = new DOMParser().parseFromString(string);
		var toConv = xtj.xml2json(doc);
		response.writeHead(200, {"Content-Type":"application/json"});
		console.log(toConv);
		response.write(toConv.replace('undefined"', '"'));
		response.end();
	}
}

exports.toxml = toxml;
exports.tojson = tojson;