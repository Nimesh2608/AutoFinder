const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../../data.json');

function readCars() {
  const data = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(data).cars || [];
}

function writeCars(cars) {
  const data = { cars };
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

module.exports = { readCars, writeCars };