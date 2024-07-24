"use strict";

// node modules
const router = require("express").Router();

// custom module
const { checkout, callback } = require("../controllers/checkout.controller");
const webhookVerification = require("../middlewares/webhook_verify");

router.post("/", checkout);

router.post("/callback", webhookVerification, callback);

module.exports = router;
