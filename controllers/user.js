const User = require("../model/user");

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (email == undefined || name == undefined) {
      return res.status(401).json({ message: "Please provide all the values" });
    }
    const user = new User({ name, email });
    await user.save();
    res.json(user);
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createUserResponse = async (req, res) => {
  try {
    const { userId, questionId, options } = req.body;
    if (
      userId == undefined ||
      questionId == undefined ||
      options == undefined
    ) {
      return res.status(401).json({ message: "Please provide all the values" });
    }
    const user = await User.findById(userId);
    const selectedOptions = { questionId, options };
    user.selectedOptions.push(selectedOptions);
    await user.save();
    res.json(user);
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getUserResponse = async (req, res) => {
  if (!req?.params?.id) {
    return res.status(401).json({ message: "Please provide the id" });
  }
  try {
    const user = await User.findById(req.params.id).populate(
      "selectedOptions.questionId"
    );
    console.log('user', user)
    res.json(user.selectedOptions);
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createUser, createUserResponse, getUserResponse };
