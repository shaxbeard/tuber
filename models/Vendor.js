const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Vendor", VendorSchema);
