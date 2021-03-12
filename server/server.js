const express = require('express');
const app = express();
const basic = require('./router/index');
const cors = require('cors');
const request = require('request');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/',basic);
app.use('/serversend',basic);

const port = 3001;
app.listen(port, () => {console.log(`Listening on port ${port}..`)});