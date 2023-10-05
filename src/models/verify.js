const mongoose = require("mongoose");

const VerifySchema = mongoose.Schema({
  status: { type: String, default: "", required: true },
  form: { type: String, default: "", required: true },
  email: { type: String, default: "", required: true },
  personal: { type: String, default: "", required: true },
  exist: { type: String, default: "", required: true },
  mx: { type: String, default: "", required: true },
  // data: { type: Object, default: {} },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  userName: {
    type: mongoose.Schema.Types.String,
    ref: "user",
  },
});
VerifySchema.set("timestamps", true);
module.exports = mongoose.model("verify", VerifySchema);