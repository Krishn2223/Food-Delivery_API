const { client } = require("../db");

class Item {
  static async create(type, description) {
    const query =
      "INSERT INTO item (type, description) VALUES ($1, $2) RETURNING id";
    const values = [type, description];
    const result = await client.query(query, values);
    return result.rows[0].id;
  }
}

module.exports = Item;
