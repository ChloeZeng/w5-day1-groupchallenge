const Group = require("./models/Group");

const testGroup = new Group({
  groupname: "group@123",
  email: "test@email.com",
  mobile: 1234567890,
  profile: "student group",
  avatarimage: "avatar.png"
});

const error = testGroup.validateSync();

if (error) {
  console.log("Validation failed:");
  console.log(error.message);
} else {
  console.log("Validation passed.");
}