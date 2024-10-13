const express = require("express");
const cors = require("cors");
const connectToMongo = require("./db");
const app = express();

// CORS configuration
const corsOptions = {
  origin: "https://khazany-shoes33.vercel.app", // Frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  optionsSuccessStatus: 200, // Legacy browsers choke on 204, so set it to 200
};

app.use(express.json());
app.use(cors(corsOptions)); // Enable CORS with the specified options

require("dotenv").config();
connectToMongo();

// Routes
app.use("/items", require("./Routes/ListItemRoutes"));
app.use("/auth", require("./Routes/AuthRoutes"));
app.use("/products", require("./Routes/ProductRoutes"));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
