const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const portfolioRoute = require("./routes/portfolioRoutes");
const path = require("path");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../build")));

app.use("/api/portfolio", portfolioRoute);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is up on PORT ${PORT}`);
});
