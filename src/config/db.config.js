"use strict";

// node modules
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const username = encodeURIComponent(process.env.DB_USERNAME);
const password = encodeURIComponent(process.env.DB_PASSWORD);
const clusterUrl = "crossapp.p5nwsa5.mongodb.net";
const connectionStr = `mongodb+srv://${username}:${password}@${clusterUrl}/?retryWrites=true&w=majority`;

const client = new MongoClient(connectionStr, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  compressors: ["snappy"],
});

module.exports = client;
