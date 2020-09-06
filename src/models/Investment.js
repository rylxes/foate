const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Invest Schema
const investmentSchema = new Schema({
  filePaths: [{type: String}],
  tier: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 1
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
}, {timestamps: true});

module.exports = mongoose.models.Investment || mongoose.model("Investment", investmentSchema);

