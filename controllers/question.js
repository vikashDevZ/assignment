const Question = require("../model/question");

const getQuestion = async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createQuestion = async (req, res) => {
  try {
    const { question, options, correctOptions } = req.body;
    if (
      question == undefined ||
      options == undefined ||
      correctOptions == undefined
    ) {
      return res.status(401).json({ message: "Please provide all the values" });
    }
    const ques = new Question({ question, options, correctOptions });
    await ques.save();
    res.status(200).json(ques);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateQuestion = async (req, res) => {
  try {
    const { question, options, correctOptions } = req.body;
    if (!req?.params?.id) {
      return res.status(401).json({ message: "Please provide the id" });
    }
    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id,
      {
        question,
        options,
        correctOptions,
      },
      { new: true }
    );
    res.status(200).json(updatedQuestion);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteQuestion = async (req, res) => {
  try {
    if (!req?.params?.id) {
      return res.status(401).json({ message: "Please provide the id" });
    }
    const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedQuestion);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createQuestion,
  getQuestion,
  updateQuestion,
  deleteQuestion,
};
