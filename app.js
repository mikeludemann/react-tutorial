/**
 * Import Modules and other packages
 */

import http from 'http';
import express from 'express';
// import session from 'express-session';
import pug from 'pug';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

// import dotenv from 'dotenv';
// import config from 'config';

import React from 'react';
import ReactDOM from 'react-dom/server';

/**
 * Setting and Getting - Variables
 */

// var hostConfig = config.get('data.hosting');
// var environmentFile = dotenv.config();

var options = { 
    beautify: true,
    transformViews: false
};

/**
 * Routing with Express
 * 
 * Setup and Configuration
 */

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');

app.engine('jsx', require('express-react-views').createEngine(options));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/*
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true
    }
}));
*/

/**
 * Including 
 * Directory: routes
 */

app.get("/", require("./routes").index);

/**
 * Error handler
 */

// 404 - handler
app.use(function(req, res, next) {

    var err = new Error('Not Found');
    err.status = 404;
    next(err);

});

// Simple Error handler

app.use(function(err, req, res, next) {
    
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === require('development' ? err : {});

    res.status(err.status || 500);
    res.render('error');
});

/**
 * Setup for http(s) Server
 * 
 * Express within http(s) server
 */
  
var server = http.createServer(app);

server.listen(3000);