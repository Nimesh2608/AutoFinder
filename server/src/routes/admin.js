const express = require('express');
const router = express.Router();

// Example admin stats endpoint
router.get('/stats', (req, res) => {
  // You could return some stats later
  res.json({ message: 'Admin area' });
});

module.exports = router;