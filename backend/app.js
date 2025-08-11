require("dotenv").config({ path: ".env.local" });

const express = require("express");
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const employeeRoutes = require("./routes/employee.routes");
const connectDB = require("./config/db.config");

// Connect to DB
connectDB();

// Middleware (optional: body-parser, cors, etc.)
app.use(cors());

// Routes
app.use("/api/employee", employeeRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
