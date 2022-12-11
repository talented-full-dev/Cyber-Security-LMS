//file name: seed.js
//description: database seed for user and message
//author: Supernova
//date: 12/01/2022

const models = require("../models");
//this function will be used for database seed

const createUsersWithMessages = async () => {
  const user1 = new models.User({
    name: "Wonderful",
    email: "aaa@bbb.com",
    password: "123456"
  });

  const user2 = new models.User({
    name: "PumaDev",
    email: "bbb@ccc.com",
    password: "123456"
  });

  const message1 = new models.Message({
    text: "Published the Road to learn MERN",
    user: user1.id
  });

  const message2 = new models.Message({
    text: "Hello everyone",
    user: user2.id
  });

  const message3 = new models.Message({
    text: "Published a complete...",
    user: user2.id
  });

  await message1.save();
  await message2.save();
  await message3.save();

  await user1.save();
  await user2.save();
};

module.exports = createUsersWithMessages;
