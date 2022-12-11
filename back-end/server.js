//file name: index.js
//description: entry point for sever side
//author: Supernova
//date: 11/28/2022

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

// Port Environment variable
const PORT = process.env.PORT;
const DATABSE_URL = process.env.DATABSE_URL;

const models = require("./models");
let corsOption = {
  origin: "http://localhost:3000"
};

const app = express();
app.use(express.static(__dirname + "/public"));

app.use(cors(corsOption));
app.use("/api", routes);

//if you want to re-initialize your database on every Express server start,
//you can add a condition to your function
const eraseDatabaseOnSync = true;

//seed
const createUsersWithMessages = require("./util/seed");

mongoose
  .connect(DATABSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(async () => {
    if (eraseDatabaseOnSync) {
      await Promise.all([
        models.User.deleteMany({}),
        models.Message.deleteMany({})
      ]);
      createUsersWithMessages();
    }
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  });
