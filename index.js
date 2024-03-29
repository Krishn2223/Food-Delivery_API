const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;
const { connectDB } = require("./db");
const pricingController = require("./controllers/pricingControllers");

connectDB();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Food Delivery API!");
});
app.use("/pricing", pricingController);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
});
