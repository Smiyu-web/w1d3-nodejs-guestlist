const express = require("express");
const path = require("path");
const mainRoutes = require("./routes/main-routes");

// Setups
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./public")));

// Route
app.use(mainRoutes);

app.use((req, res) => {
  res.status(404).send("404-No");
});

// Server starts
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server has started on port ${PORT}...`));
