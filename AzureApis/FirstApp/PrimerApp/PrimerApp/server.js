'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 1337;

app.post('/hola', function (req, res) {
    res.send('[POST]Saludos desde express');
});

app.get('/hola', function (req, res) {
    res.send('[GET]Saludos desde express');
});

app.listen(port, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});
