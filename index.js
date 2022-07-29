// const router = require("./App.js")
const express = require("express");
const PORT = 8000;
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");





  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

const indexRouter = require("./src/router/bookings");
app.use("/bookings", indexRouter);

// app.use(router);




app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
