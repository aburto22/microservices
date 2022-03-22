const express = require("express");
const path = require("path");

const router = express.Router();

/* GET home page. */
router.use(express.static(path.join(__dirname, "../../client/build")));

module.exports = router;
