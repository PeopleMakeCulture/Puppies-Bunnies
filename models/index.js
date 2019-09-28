const Sequelize = require('sequelize');
// const db = new Sequelize('postgres://localhost:5432/wikistack');

//or id we do not want to see  the console output (SQL command text for each query) the we do this =>
const db = new Sequelize('postgres://localhost:5432/Bunnies-Puppies', {
  logging: false
});

//create models for puppies
//include: name(string), age(int), breed(ENUM), isGoodBoy(Boolean) with default to true

const Bunnies = db.define('bunny', {});

//create models for bunnies
//include: name(string), age(int), floppyEars(boolean)

module.exports = { db, Bunnies, Puppies };
