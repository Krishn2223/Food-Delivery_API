const { client } = require("../db");

class Pricing {
  static async create(
    organizationId,
    itemId,
    zone,
    baseDistanceInKm,
    kmPrice,
    fixPrice
  ) {
    const query =
      "INSERT INTO pricing (organization_id, item_id, zone, base_distance_in_km, km_price, fix_price) VALUES ($1, $2, $3, $4, $5, $6)";
    const values = [
      organizationId,
      itemId,
      zone,
      baseDistanceInKm,
      kmPrice,
      fixPrice,
    ];
    await client.query(query, values);
  }

  static async getByOrganizationAndItem(organizationId, itemType) {
    const query =
      "SELECT p.* FROM Pricing p INNER JOIN Item i ON p.item_id = i.id WHERE p.organization_id = $1 AND i.type = $2";
    const values = [organizationId, itemType];
    const result = await client.query(query, values);
    return result.rows;
  }
}

module.exports = Pricing;
