const express= require('express');
const port = 3000;
const connectDB=require('./config/db');
const dotenv=require('dotenv').config();

//declare express app
const app = express();

app.get('/post', (req, res) => {
    res.json({message: "Bonjour tout le monde!"});
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//middleware pour parser le corps des requêtes en JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/post', require('./routes/usersroute'));

