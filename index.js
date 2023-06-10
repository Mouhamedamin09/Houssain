const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/App.js");

const port = 7001;

app.use(express.json());
app.use(router);

mongoose.connect('mongodb://localhost:27017/User').then(() => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch((error) => {
  console.error("Failed to connect to MongoDB:", error);
});
