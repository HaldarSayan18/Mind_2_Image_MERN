const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const PostRoutes = require('./routes/PostRoutes.js');
const { generateImage } = require('./controllers/GenerateAllImage.js');


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/post", PostRoutes)
app.use("/api/generateImg", generateImage)

// error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Some error happended!";
    return res.status(status).json({
        success: false,
        status,
        message
    });
});

// default get
app.get("/", async (req, res) => {
    res.status(200).json({
        message: "Hello World",
    });
});

// server connection with mongodb
const connectDB =()=>{
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>console.log("MongoDB connected.."))
    .catch((err)=>console.log("Failed to connect DB ==> ",err))
}

// start server
const PORT = 4001;
const startServer = async () => {
    try {
        connectDB();
        app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}/`))
    } catch (error) {
        console("error in server ==> ", error)
    }
};
startServer();