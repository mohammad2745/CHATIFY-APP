const express = require("express");

const router = express.Router();

router.get("/send", (req, res) => {
  res.send("Message route");
});

module.exports = router;
