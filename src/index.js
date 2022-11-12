/*------------------------------------------Import Modules:-------------------------------------------*/
const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/routes.js');
const mongoose = require('mongoose');
const app = express();

/*------------------------------------------Bind Application Level Middleware:-------------------------------------------*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*------------------------------------------Connecting Data-Base:-------------------------------------------*/
mongoose.connect("mongodb+srv://BiswajitSwain:EtERzBKu3NLVQlzp@cluster0.xf1eq.mongodb.net/BLOGGING-SITE", {
    useNewUrlParser: true
})

.then(() => console.log("MongoDb is connected"))
.catch(err => console.log(err))

app.use('/', route)

/*------------------------------------------Binding Connecting on port:-------------------------------------------*/
app.listen(3001, function () {
    console.log('Express app running on port ' + 3001)
});