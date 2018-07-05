const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Todos collection and inserts the todos below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/reacttodo"
);

const todoSeed = [
  {
    task: "Sample Task",
    complete: false,
    priority: 3,
    date: new Date(Date.now())
  },
  {
    task: "Completed Task",
    complete: true,
    priority: 2,
    date: new Date(Date.now())
  }
];

db.Todo
  .remove({})
  .then(() => db.Todo.collection.insertMany(todoSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
