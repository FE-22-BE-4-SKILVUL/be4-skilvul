const express = require("express");
const OrderDetail = require("../models/order_details_models");
const auth = require("../middleware/auth");
const admin = require("../middleware/authorization");
const express = require("express");

const router = express.Router();

router.post("/order_detail", async (req, res) => {
  try {
    const {
      order_id,
      kelas_id,
      harga,
    } = req.body;
    if (order_id !== confirm_order_id) {
      return res.status(400).json({ message: "Order ID does not match" });
    }
    const order_detail = new OrderDetail({
      order_id,
      kelas_id,
      harga,
    });
    await order_detail.save();
    res.status(201).json({ message: "Order detail created", order_detail });
  } catch (error) {
    res.status(500).json({ message: "Failed to create order detail", error });
  }
});

router.get("/", async (req, res) => {
  try {
    const order_details = await OrderDetail.find();
    res.status(200).json({ order_details });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
