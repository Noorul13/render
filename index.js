const express = require('express')
const app = express()
const connectDB = require('./db/db');
const userRoutes = require('./routes/userRoutes');

require('dotenv').config()

app.use(express.json());
const PORT = process.env.PORT || 5000;

connectDB();

app.use('/api', userRoutes);

app.get("/", async (req, res) => {
    res.send("hello");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 