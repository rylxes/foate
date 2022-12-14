const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Investor Schema
const investorSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 1
  },
  address: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  role: {
    type: String,
    default: "investor"
  },
  tier: {
    type: String,
    enum: ["starter", "slice", "stake"]
  },
}, {timestamps: true});

module.exports = mongoose.models.Investor || mongoose.model("Investor", investorSchema);

