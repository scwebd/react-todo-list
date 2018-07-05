const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  task: { type: String, required: true },
  complete: { type: Boolean, default: false },
  priority: String,
  date: { type: Date, default: Date.now }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
