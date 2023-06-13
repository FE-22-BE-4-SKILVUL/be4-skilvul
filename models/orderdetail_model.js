const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

let orderdetailSchema = mongoose.Schema(
  {
    order_id: {
      type: String,
      ref: 'order',
    },
    kelas_id: {
      type: String,
      ref: 'kelas',
    },
    harga: {
      type: Number,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Order_detail", orderdetailSchema);
