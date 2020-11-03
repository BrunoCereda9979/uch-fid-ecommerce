const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

//App
const app = express();

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Rutas
const userRoutes = require('./api/routes/user'); //Registro y Autenticacion por Tokens

//Manejadores de rutas
app.use('/auth/users', userRoutes);

module.exports = app;