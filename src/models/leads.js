const mongoose = require("mongoose");

const LeadsSchema = mongoose.Schema({
  firstName: { type: String, default: "", required: true },
  lastName: { type: String, default: "", required: true },
  email: { type: String, default: "", required: true },
  quality: { type: String, default: "", required: true },
  domain: { type: String, default: "", required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  userName: {
    type: mongoose.Schema.Types.String,
    ref: "user",
  },
});
LeadsSchema.set("timestamps", true);
module.exports = mongoose.model("leads", LeadsSchema);
