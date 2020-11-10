const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

//Esquemas
const User = require('../models/user');

//---------------REGISTRO DE USUARIOS---------------//
router.post("/", (req, res, next) => {
    console.log('------>REQUEST: ' + req.body.userEmail + ' ' + req.body.userPassword);

    User.find({userEmail: req.body.userEmail}).exec()
    .then(user => {
        //EMAIL TOMADO
        if (user.length >= 1) {
            res.status(409).json({
                message: 'Ese email ya esta tomado',
                status: 409
            });
        }
        else {
            const newUser = User({
                _id: new mongoose.Types.ObjectId(),
                userEmail: req.body.userEmail,
                userPassword: req.body.userPassword
            });

            //GUARDO USUARIO EN LA BASE DE DATOS
            newUser.save()
            .then(user => {
                res.status(201).json({
                    message: 'Nueva cuenta creada exitosamente',
                    status: 201,
                    createdAccount: {
                        userId: user._id,
                        userEmail: user.userEmail
                    }
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Lo sentimos, no se puede crear la cuenta',
                    error: err,
                    status: 500
                })
            })
        }
    })
    .catch(
        res.status(500).json({
            message: 'Lo sentimos, hubo un error en el servidor',
            status: 500
        })
    )
});

//-----------INICIO DE SESION DE USUARIOS-----------//
router.get("/", (req, res, next) => {
    console.log('------>REQUEST: ' + req.body.userEmail + ' ' + req.body.userPassword);

    User.find({userEmail: req.body.userEmail}).exec()
    .then(user => {
        //USUARIO NO REGISTRADO
        if (user.length < 1) {
            res.status(401).json({
                message: 'Ese email no esta registrado',
                status: 401
            })
        }
        else {
            //CONTRASEÑA COINCIDE
            if (req.body.userEmail == user.userEmail) {
                //GENERAR TOKEN Y DEVOLVERLO
            }
            else {
                res.status(401).json({
                    message: 'La contraseña no coincide',
                    status: 500
                })
            }
        }
    })
    .catch(
        res.status(500).json({
            message: 'Lo sentimos, hubo un error en el servidor',
            status: 500
        })
    )
});

module.exports = router;