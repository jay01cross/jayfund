"use strict";

// node modules
const router = require("express").Router();

// custom module
const { checkout } = require("../controllers/checkout.controller");

router.get("/", checkout);

module.exports = router;
