"use strict";

const checkout = async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = { checkout };
