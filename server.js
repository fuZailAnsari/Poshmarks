const express = require("express");
const connectDb = require("./Models/config/db");
const Router = require("./Routes/brand_routes");
const app = express();
app.use(express.json());
app.use(Router);
require("dotenv").config();
const PORT = process.env.PORT || 5000;
connectDb();
app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
