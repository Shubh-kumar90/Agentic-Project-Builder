require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const projectRoutes = require("./routes/projectRoutes");

// const cors = require("cors");
const historyRoutes =
require("./routes/historyRoutes");

app.use("/api/history", historyRoutes);
app.use(cors());
// app.use(cors());
app.use(express.json());
app.use("/api/project", projectRoutes);
app.get("/", (req, res) => {
    res.send("AI Project Builder Agent Running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});