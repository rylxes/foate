const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Project Schema
const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  vendor: {
    type: Schema.Types.ObjectId,
    ref: "Vendor"
  },
  quote: {
    type: String,
    trim: true,
    minlength: 1,
    default: 0,
  },
  amount: {
    type: String,
    default: 0,
    trim: true,
    minlength: 1
  },
  photos: [{
    type: String,
    default: ''
  }],
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "completed"]
  },
}, {timestamps: true});

module.exports = mongoose.models.Project || mongoose.model("Project", projectSchema);

