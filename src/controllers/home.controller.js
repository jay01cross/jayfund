"use strict";

// custom modules

// const client = require('../config/db.config')
const contributeService = require("../services/contribute_service");
const getAvatar = require("../helper/helper");

const home = async (req, res) => {
  try {
    const filter = { payment_status: "paid" };
    const projection = {
      _id: 0,
      name: 1,
      amount: 1,
      message: 1,
    };

    const supporterList = (
      await contributeService.readData(filter, projection)
    ).reverse();
    // console.log(supporterList);

    res.render("./pages/home", {
      supporterList,
      getAvatar,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = { home };
