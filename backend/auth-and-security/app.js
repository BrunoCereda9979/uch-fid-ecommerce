const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

//App
const app = express();

//Base de Datos
mongoose.connect('mongodb+srv://equipo_uch:equipouch@uch-fid-auth-database.zuw0z.mongodb.net/<uch-fid-auth-database>?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Rutas
const userRoutes = require('./api/routes/users'); //Registro y Autenticacion por Tokens

//Handlers
app.use('/auth', userRoutes);

module.exports = app;