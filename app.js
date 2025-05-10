// app.js

const express = require("express");
const path = require("path");
const pageRoutes = require("./routes/pageRoutes");


const app = express();
const port = 3000;

//used to allow the server to accept form data
// and parse JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", pageRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
