import User from "../models/User.js";
import mongoose from "mongoose";

export const validId = (req, res, next) => {
  try {
    const { user_id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(user_id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const validUser = async (req, res, next) => {
  try {
    const { user_id } = req.params;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
