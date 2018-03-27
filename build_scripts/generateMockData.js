
const jsf = require('json-schema-faker');
const schema = require('./mockDataSchema.js');
const fs = require('fs');

jsf.extend('faker', function () {
  return require('faker');
});

const json = JSON.stringify(jsf(schema));

fs.writeFile('./src/api/db.json', json, err => {
  if (err) return console.log(err);
  console.log("Mock data generated");
});
