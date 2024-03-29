const Pricing = require("../models/pricing");

class PricingService {
  static async calculateTotalPrice(
    organizationId,
    zone,
    totalDistance,
    itemType
  ) {
    // Fetch pricing information from the database based on organization, zone, and item type
    const pricing = await Pricing.getByOrganizationAndItem(
      organizationId,
      itemType
    );
    if (!pricing || pricing.length === 0) {
      throw new Error(
        "Pricing information not found for the specified organization and item type."
      );
    }

    // Find the pricing structure for the specified zone
    const pricingForZone = pricing.find((p) => p.zone === zone);
    if (!pricingForZone) {
      throw new Error(
        `Pricing information not found for the specified zone: ${zone}`
      );
    }

    let totalPrice = pricingForZone.fix_price; // Base price

    // Calculate distance beyond the base distance
    const distanceBeyondBase = Math.max(
      0,
      totalDistance - pricingForZone.base_distance_in_km
    );

    // Calculate additional price for the distance beyond the base
    const additionalPrice = distanceBeyondBase * pricingForZone.km_price;

    // Add additional price to the total price
    totalPrice += additionalPrice;

    return totalPrice;
  }
}

module.exports = PricingService;
