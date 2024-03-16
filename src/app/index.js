const express = require("express");
const bookRoutes = require("./routes/bookRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

app.use(express.json());

app.use("/books", bookRoutes);
app.use("/reviews", reviewRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
