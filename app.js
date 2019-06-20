const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 3000;
const layout = require('./views/layout');

//use this only for simple directories
// app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));
//we have multiple folders, so we need the whole path.
//__dirname says current directory of the file and wd add /public to it.


app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));

app.get('/', function(req, res) {
  res.send(layout(" "));
  //anchors have blue text
  // res.send(layout("<a>test</a>"));
})

app.listen(PORT, function() {
  console.log("App listening.")
})

