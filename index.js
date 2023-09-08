const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/", (req, res) => {
  return res.send("<h1>Hello World</h1>");
});

app.listen(3000, () => console.log("App listen on port: 3000"));
