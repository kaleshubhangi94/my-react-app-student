const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const studentRoutes = require("./routes/studentRoutes");
const markRoutes = require("./routes/markRoutes"); // Import the markRoutes file
const app = express();
const cors = require('cors');

app.use(cors());

// Optional: Restrict CORS to specific origins (e.g., your React app)
app.use(cors({
    origin: 'http://localhost:3001' // Allow requests only from this origin
}));

app.use(express.json());

app.use(bodyParser.json());
app.use("/api", studentRoutes);
app.use("/mark-api", markRoutes); // Use the mark routes under the /api path

sequelize.sync({ alter: true })
  .then(() => {
    console.log("Database synced!");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

app.listen(3000, () => console.log("Server running on port 3000"));
