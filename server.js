const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDatabase = require("./src/config/database");
const blogRoutes = require("./src/routes/blogRoutes");
const errorMiddleware = require("./src/middleware/errorMiddleware");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDatabase();

app.use("/api/blogs", blogRoutes);

app.get("/", (req, res) => {
  res.send("Travel Blog API is working");
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
