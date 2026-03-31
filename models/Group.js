const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  groupname: {
    type: String,
    required: [true, "groupname is required"],
    lowercase: true,
    match: [/^[a-z0-9!@#$%^&?*+_.-]+$/, "groupname contains invalid characters"]
  },
  email: {
    type: String,
    required: [true, "email is required"],
    lowercase: true,
    match: [/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, "email format is invalid"]
  },
  mobile: {
    type: Number
  },
  profile: {
    type: String
  },
  avatarimage: {
    type: String
  }
});

module.exports = mongoose.model("Group", GroupSchema);