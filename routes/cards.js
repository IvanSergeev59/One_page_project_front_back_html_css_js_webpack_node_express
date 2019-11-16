const router = require("express").Router();
const { cards } = require("../data/cards.js");

module.exports = router;
router.get("/cards", (req, res) => {
  res.send(cards);
});
