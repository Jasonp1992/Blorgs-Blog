const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 3001;
const app = express();

// serve static files from /public
app.use(express.static(path.join(__dirname, "../public")));

app.use(cors());
app.use(morgan("dev"));

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./api"));

app.listen(PORT, () => {
  console.log(`Getting Saucy at ${PORT}`);
});
