'use strict';

// import express from 'express';
// // import { renderToString } from 'react-dom/server';
// // import App from '../../client/App';

// const app = express();

// app.use(express.static(__dirname +'./../../')); //serves the index.html
// app.get('/', (req, res) => {
//     // const markup = renderToString(<App />);
//     res.send('Hello World');
// });

// app.listen(3000);

var express = require('express');
var app = express();

app.use(express.static(__dirname + './../../')); //serves the index.html
app.listen(3000);