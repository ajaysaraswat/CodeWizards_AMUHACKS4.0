const User = require("../models/User");

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: "Server error" });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { hobbies } = req.body;
    const user = await User.findById(req.user._id);

    if (user) {
      user.hobbies = hobbies || user.hobbies;
      // Update hobby embeddings if hobbies are updated
      if (hobbies) {
        user.hobbyEmbeddings = hobbiesToVector(hobbies);
      }

      const updatedUser = await user.save();
      res.json({
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        hobbies: updatedUser.hobbies,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getProfile,
  updateProfile,
};
