"use strict";

// node modules

const crypto = require("crypto");
require("dotenv").config();

module.exports = (req, res, next) => {
  const { sign } = req.bpdy;

  if (!sign) {
    return res.status(400).send("Invalid Payload");
  }

  const data = JSON.parse(req.rawBody);

  delete data.sign;

  const hash = crypto
    .createHash("md5")
    .update(
      Buffer.from(JSON.stringify(data)).toString("base64") +
        process.env.PAYMENT_API_KEY
    )
    .digest("hex");

  if (hash !== sign) {
    return res.status(400).send("Invalid sign!");
  }

  next();
};
