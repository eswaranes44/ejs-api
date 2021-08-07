const express = require("express");
const app = express();
const port = 3001;
const jsonFile = require("./random.json")

app.use("/static", express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs",{jsontitle: jsonFile});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
