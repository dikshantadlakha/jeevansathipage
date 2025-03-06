const express = require("express");
const app = express();
const PORT = 3000;

<<<<<<< HEAD
// Serve static files from the public directory
app.use(express.static('views/public'));
=======
// Serve static files correctly from the "public" directory
app.use(express.static('public'));
>>>>>>> 336cf86 (Initial commit - Node.js EJS project)

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Define a route
app.get("/", (req, res) => {
<<<<<<< HEAD
  res.render("index", { title: "My EJS Page", message: "Hello, EJS!" });
=======
  res.render("index");
>>>>>>> 336cf86 (Initial commit - Node.js EJS project)
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
