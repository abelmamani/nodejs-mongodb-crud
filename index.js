import express from 'express';
import connectDB from './config/db.js';
import movieRoutes from './routes/movieRoutes.js';
connectDB();

const app = express(); 
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/movies', movieRoutes);

app.listen(PORT, () => {
    console.log("Server is runnign in http://localhost:"+PORT)
});