'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { renderToString } from 'react-dom/server';
// import App from '../../client/App';

var app = (0, _express2.default)();

app.use(_express2.default.static(__dirname + './../../')); //serves the index.html
app.get('/', function (req, res) {
    // const markup = renderToString(<App />);
    res.send('Hello World');
});

app.listen(3000);

// var express = require('express');
// var app = express();

// app.use(express.static(__dirname +'./../../')); //serves the index.html
// app.listen(3000);