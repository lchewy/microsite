'use strict';
const http = require("http");
const server = http.createServer();
const express = require('express');
const volleyball = require('volleyball');
const app = express();
const model = require('./index.js');
const User = model.User;
const bodyParser = require("body-parser");


app.use(volleyball);

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post("/api/signup", (req,res,next)=>{
  User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      zip: req.body.zip,
      st: req.body.st
  })
})


model.db
  .sync()
  .then(()=>{
    // User.create({
    //   firstName: 'bob',
    //   lastName: 'boob',
    //   email: 'yo@yo.yo',
    //   zip: 12345,
    //   st: 'NV'
    // })
    app.listen(3000, function () {
      console.log('Server listening on port', 3000);
    });

  })
  .catch(console.error);

// module.exports = app;