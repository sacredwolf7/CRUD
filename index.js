var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//creating express apps
var app = express();

//adding middlewares
app.use(bodyParser.json());



//adding mongoose connection
mongoose.connect('mongodb+srv://akshatsingh6262:27Ea5IN8BUwknXFI@cluster0.4mmbr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
app.use(bodyParser.urlencoded({ extended : true }));
console.log('db : connected');

var eventController = require('./Controller/eventController.js');
eventController(app);
//listening at port
app.listen(3000, () => {
    console.log("connected to port : 3000")
})

