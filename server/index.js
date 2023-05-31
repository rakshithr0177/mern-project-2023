import express from "express"
import mongoose from 'mongoose'
import cors from 'cors'

const PORT = 4000;

const app = express();

app.use(cors)

mongoose.connect(`mongodb+srv://rakshithr:rakshithr@cluster0.wwtxykj.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log("Database connected"))
    .catch((err) => console.error(err));

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:4000`)
})