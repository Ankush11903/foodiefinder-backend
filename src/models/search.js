const mongoose = require("mongoose");

const SearchSchema = mongoose.Schema({
  email: { type: String, default: "", required: true },
  verified: { type: String, default: "", required: true },
  quality: { type: String, default: "", required: true },
  saved: { type: String, default: "", required: true },
  domain:{ type: String, default: "", required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  userName: {
    type: mongoose.Schema.Types.String,
    ref: "user",
  },
});
SearchSchema.set("timestamps", true);
module.exports = mongoose.model("searchs", SearchSchema);
