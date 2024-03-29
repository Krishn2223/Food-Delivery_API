const { client } = require("../db");

class Organization {
  static async create(name) {
    const query = "INSERT INTO organization (name) VALUES ($1) RETURNING id";
    const values = [name];
    const result = await client.query(query, values);
    return result.rows[0].id;
  }
}

module.exports = Organization;
