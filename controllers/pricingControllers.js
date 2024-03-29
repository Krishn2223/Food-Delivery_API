const express = require("express");
const router = express.Router();
const PricingService = require("../services/pricingService");

// Endpoint to calculate total price
router.post("/calculatePrice", async (req, res) => {
  try {
    const { organization_id, zone, total_distance, item_type } = req.body;
    const totalPrice = await PricingService.calculateTotalPrice(
      organization_id,
      zone,
      total_distance,
      item_type
    );
    res.json({ total_price: totalPrice });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while calculating the total price." });
  }
});

module.exports = router;
