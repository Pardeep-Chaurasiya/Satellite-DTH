const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Set up routes
app.use("/channels", require("./routes/channels"));
app.use("/packages", require("./routes/packages"));
app.use("/plans", require("./routes/plans"));
app.use("/subscriptions", require("./routes/subscriptions"));
app.use("/users", require("./routes/users"));

module.exports = app;
