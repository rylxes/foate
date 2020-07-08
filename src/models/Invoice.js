const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Invoice Schema
const invoiceSchema = new Schema({
  vendor: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
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
    minlength: 5
  },
  photo: {
    type: String,
  },
  amount: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "done"]
  },
}, {timestamps: true});

module.exports = mongoose.models.Invoice || mongoose.model("Invoice", invoiceSchema);

