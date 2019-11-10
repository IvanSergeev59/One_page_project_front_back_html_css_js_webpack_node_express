const router = require('express').Router();
module.exports = router;
const { cards } = require('./cards/cards');

router.get('/cards/:id', (req, res) => {
 
  return res.send(cards)
});