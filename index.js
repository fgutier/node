const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();
app.use(bodyParser.json());

require('./models/Personas');

mongoose.connect(keys.MONGO_URL);

require('./routers/personasRoutes')(app);

app.listen(process.env.PORT || 5000);

//conection a la BD