const express = require("express");
const app = express();
const PORT = 3000;

// Serve static files from the public directory
app.use(express.static('views/public'));

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Define a route
app.get("/", (req, res) => {
  res.render("index", { title: "My EJS Page", message: "Hello, EJS!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
