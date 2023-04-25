const mongoose = require("mongoose");

// const questionSchema = new mongoose.Schema({
//   question: {
//     type: String,
//     required: true,
//   },
//   options: {
//     type: [String],
//     required: true,
//     validate: {
//       validator: function (count) {
//         return count.length === 4;
//       },
//       message: (props) => `${props.value} must provide four options`,
//     },
//   },
// });

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctOptions: [Number],
});

module.exports = mongoose.model("Question", questionSchema);
