require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_NAME, { useNewUrlParser: true , 
    useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to DataBase'));

app.use(express.json());
app.use(cors());

//Add Router
const subscriberRoutes = require('./Routes/subscriber');
app.use('/subscriber', subscriberRoutes);

app.listen(3002, () => console.log('Server started'));