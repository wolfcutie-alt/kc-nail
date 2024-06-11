const express = require("express");
const sequelize = require("./db");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Welcome to the booking API!");
});

app.use('/api', bookingRoutes);

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
        
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

startServer();