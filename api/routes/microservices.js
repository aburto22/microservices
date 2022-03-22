const express = require("express");

const router = express.Router();

/* GET timestamp. */
router.get("/", (req, res) => {
  const data = {
    timestamp: res.locals.timestamp,
    headers: res.locals.headers,
  };

  res.send(JSON.stringify(data));
});

module.exports = router;
