const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 3000;
const layout = require('./views/layout');
//the reason we deconstruct db is because we'll be importing other objects from that file.
//not just the database.
const { db } = require('./models');

const models = require('./models');

db.authenticate().then(() => {
  console.log('connected to the database');
});

//use this only for simple directories
// app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));
app.use(express.json());
//we have multiple folders, so we need the whole path.
//__dirname says current directory of the file and wd add /public to it.

app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', function(req, res) {
  res.send(layout(' '));
  //anchors have blue text
  // res.send(layout("<a>test</a>"));
});

//create a route to get all buns

//create a route to get all pups

//create a route to get one bun

//create a route to make one pup

const init = async () => {
  // await models.User.sync()
  // await models.Page.sync()
  //or
  await models.db.sync();

  app.listen(PORT, function() {
    console.log(`App is listening on port ${PORT}!`);
  });
};
// this drops all tables then recreates them based on our JS definitions
models.db.sync({ force: true });

init();
