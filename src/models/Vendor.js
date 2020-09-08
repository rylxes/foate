const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Investor Schema
const userSchema = new Schema({
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
    default: "vendor"
  },
}, {timestamps: true});

module.exports = mongoose.models.Vendor || mongoose.model("Vendor", vendorSchema);

