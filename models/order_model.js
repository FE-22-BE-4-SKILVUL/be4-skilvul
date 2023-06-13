const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

let orderSchema = mongoose.Schema(
  {
    user_id: {
      type: String,
      ref: 'user',
    },
    order_date: {
      type: Date,
    },
    lokasi: {
      type: String,
      ref: 'lokasi',
    },
    mapel: {
      type: String,
      ref: 'kategori',
    },
    Waktu: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Order", orderSchema);
