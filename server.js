const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const menu = [
  { id: 1, name: "Margherita Pizza", price: 12.5, category: "Pizza" },
  { id: 2, name: "Caesar Salad", price: 8.75, category: "Salad" },
  { id: 3, name: "Lemonade", price: 3.5, category: "Drink" },
];

app.get("/menu", (req, res) => {
  res.json(menu);
});

app.get("/", (req, res) => {
  res.send("Restaurant menu API. Visit /menu");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});