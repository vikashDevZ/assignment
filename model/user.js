const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   selectedOptions: {
//     type: [String],
//   },
// });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  selectedOptions: [
    {
      questionId: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
      options: [Number],
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
