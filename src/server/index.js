var express = require('express');

const app = express();

app.use(express.static(__dirname + './../../')); //serves the index.html
app.listen(3000);
