// app.js

const express = require("express");
const path = require("path");
const pageRoutes = require("./routes/pageRoutes");


const app = express();
const port = 3000;


//Middleware to log the request being made to the server
const loggingMiddleware = (req, res, next) => {
  console.log(`[${new Date()}] ${req.method} ${req.url}`);
  next();
};

app.use(loggingMiddleware)

//Middleware to allow the server to accept form data
// and parse JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Middleware to manage internal errors
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
};

app.use(errorHandler)

app.use("/", pageRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
