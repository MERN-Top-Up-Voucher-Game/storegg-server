const mongoose = require("mongoose");
let voucherSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Nama game harus diisi"],
  },
  status: {
    type: String,
    enum: ["Y", "N"],
    default: "Y",
  },
  thumbnail: {
    type: String,
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
  },
  nominals: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Nominal",
    },
  ],
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  payments: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Payment",
    },
  ],
});

module.exports = mongoose.model("Voucher", voucherSchema);
