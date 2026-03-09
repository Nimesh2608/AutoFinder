const express = require('express');
const { readCars, writeCars } = require('../db/store');
const router = express.Router();

// GET tutte le macchine
router.get('/', (req, res) => {
  const cars = readCars();
  res.json({ cars });
});

// POST una nuova macchina
router.post('/', (req, res) => {
  const { marca, modello, anno, prezzo, immagine } = req.body;
  if (!marca || !modello || !anno || !prezzo) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const cars = readCars();
  const newCar = {
    id: Date.now(),            
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

// DELETE una macchina dal ID
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  let cars = readCars();
  cars = cars.filter(car => car.id !== id);
  writeCars(cars);
  res.json({ success: true });
});

module.exports = router;