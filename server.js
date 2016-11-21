const express = require('express');

const app = express();
var path = require('path');
const selectUser = require('./public/src/mongodb/users/selectUser');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/selectUser', selectUser.findUser);

app.use(express.static('public'));

app.listen(3000, function () {
  console.log("server started at http://localhost:3000");
});