const express = require('express');
const { readCars, writeCars } = require('../db/store');
const router = express.Router();

// GET all cars
router.get('/', (req, res) => {
  const cars = readCars();
  res.json({ cars });
});

// POST a new car
router.post('/', (req, res) => {
  const { marca, modello, anno, prezzo, immagine } = req.body;
  if (!marca || !modello || !anno || !prezzo) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const cars = readCars();
  const newCar = {
    id: Date.now(),            // simple unique id
    marca,
    modello,
    anno,
    prezzo,
    immagine: immagine || ''
  };
  cars.push(newCar);
  writeCars(cars);
  res.status(201).json(newCar);
});

// DELETE a car by id
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  let cars = readCars();
  cars = cars.filter(car => car.id !== id);
  writeCars(cars);
  res.json({ success: true });
});

module.exports = router;