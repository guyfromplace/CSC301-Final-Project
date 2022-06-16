const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const CPUroutes = require('./routes/cpu');
const Moboroutes = require('./routes/motherboard');
const Caseroutes = require('./routes/case');
const PSroutes = require('./routes/power_supply');
const GPUroutes = require('./routes/gpu');
const RAMroutes = require('./routes/ram');
const Storageroutes = require('./routes/storage');
const Accountroutes = require('./routes/account');
const Buildroutes = require('./routes/build');
const path = require('path');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

//connect to the database
mongoose.connect(process.env.DB, { useNewUrlParser: true  })
    .then(() => console.log(`Database connected successfully`))
    .catch(err => console.log(err));

//since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.use('/cpu', CPUroutes);
app.use('/motherboard', Moboroutes);
app.use('/case', Caseroutes);
app.use('/power_supply', PSroutes);
app.use('/gpu', GPUroutes);
app.use('/ram', RAMroutes);
app.use('/storage', Storageroutes);
app.use('/account', Accountroutes);
app.use('/build', Buildroutes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
