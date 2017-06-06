var express = require('express');
var timeProvider = require("./api/timeProvider");

var router = express.Router();
var app = express();

app.use(express.static(__dirname + '/'));

app.listen(process.env.PORT || 3000, function () {
    console.log('Server started!') })

 router.get('/time', function(req, res) {
     res.json({
    time: timeProvider.now()
     });
 });
app.use('/api', router);