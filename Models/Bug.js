const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    min: 6,
    required: true,
  },
  priority: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    default: 1,
  },
  status: {
    enum: ["todo", "doing", "done"],
    default: "todo",
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  lastUpdated:{
    type:Date
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const Bug = mongoose.model("Bug", schema);
module.exports = Bug;
