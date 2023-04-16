const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT||5000;

const app = express();

app.use('/openai', require('./routes/openAIroutes'));

app.listen(port, ()=>console.log(`Server started on port ${port}`));