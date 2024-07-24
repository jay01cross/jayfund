"use strict";

// custom modules
const paymentApi = require("../api/payment.api");

const checkout = async (req, res) => {
  try {
    const { amount } = req.body;

    const invoice = await paymentApi.createInvoice(amount);

    console.log(invoice);
    res.json(invoice);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const callback = async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = { checkout, callback };
