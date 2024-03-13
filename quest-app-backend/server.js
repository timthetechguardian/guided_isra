// // let mainFunc = require('/db/conn.mjs');
// import main from './db/conn.js';

// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var cors = require('cors');
// var bodyParser = require('body-parser');

// // Include route files
// // var profileRoute = require('./routes/api/profileRoutes');
// // var questRoute = require('./routes/api/questRoutes');

// var app = express();
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(cors());
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// // Use routes
// // app.use('/profile', profileRoute);
// // app.use('/quest', questRoute);

// mainFunc.connectToServer( function( err, client ) {
//     if (err) console.log(err);
//     app.get('/profile', (req, res) => {
//         res.json(main);
//     });
//     const port = process.env.PORT || 3001;
//     app.listen(port, () => {
//         console.log(`Server is running on port ${port}`);
//     }  );
// });

import express from 'express';
import cors from 'cors';
import router1 from './routes/api/profileRoutes.js';
import router from './routes/api/questRoutes.js';

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/profile', router1);
app.use('/quest', router);

// start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});