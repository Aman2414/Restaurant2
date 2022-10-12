const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./controllers/route");
const port = process.env.PORT || 5000;

app.use("/", routes);

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
  console.log("Server Started");
});
