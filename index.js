const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const app = express();
const PORT = process.env.PORT || 3000;
const { connectDB } = require("./db");
const pricingControllers = require("./controllers/pricingControllers");
const YAML = require("yamljs");

connectDB();
app.use(bodyParser.json());

//load .yml file
const swaggerDoc = YAML.load("./utils/swagger.utils.yml");

// Serve Swagger UI documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Food Delivery API!");
});

app.use("/pricing", pricingControllers);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
});
