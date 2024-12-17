const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");
const connectDB = require("./config/config");
const cors = require("cors");

const app = express();

require("colors");

//config dotenv
dotenv.config();

//connection mongodb
connectDB();



//middlewares
app.use(cors())
app.use(express.json());
app.use(morgan("dev"));



//route
app.use("/api/pizzas", require("./routes/pizzaRoute"));


app.get("/", (req, res) => {
  res.send("<h1>Hello From Node Server via nodemon</h1>");
});


const port = process.env.PORT || 1300;
app.listen(port, () => {
  console.log(
    `Server Running On ${process.env.NODE_ENV} mode on port no http://localhost:${port}`
      .bgYellow.green
  );
});
