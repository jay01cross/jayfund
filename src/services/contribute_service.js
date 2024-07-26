"use strict";

// custom modules

const client = require("../config/db.config");

const storeData = async (data) => {
  try {
    await client.connect();

    const db = client.db("jayfund");

    const contribution = await db.collection("contribution");

    const footPrint = await contribution.insertOne(data);

    return footPrint;
  } catch (error) {
    console.error(error);

    throw error;
  } finally {
    await client.close();
  }
};

const updateData = async (order_id, data) => {
  try {
    await client.connect();

    const db = client.db("jayfund");

    const contribution = await db.collection("contribution");

    const filter = { order_id };

    const updateStatus = { $set: data };

    const response = await contribution.updateOne(filter, updateStatus);

    return response;
  } catch (error) {
    console.error(error);

    throw error;
  } finally {
    await client.close();
  }
};

const readData = async (filter, projection, limit = 20) => {
  try {
    await client.connect();

    const db = client.db("jayfund");

    const contribution = await db.collection("contribution");

    const response = await contribution
      .find(filter, { projection })
      .limit(limit)
      .toArray();

    return response;
  } catch (error) {
    console.error(error);

    throw error;
  } finally {
    await client.close();
  }
};

module.exports = {
  storeData,
  updateData,
  readData,
};
