var express = require('express')
var config = require('../etc/config.json')
var bodyParser = require('body-parser')

var cors = require('cors')

var app = express()

var db = require('./utils/DataBaseUtils')

var n100Utils = require('./utils/N100Utils')

//Connection mongoDb when start server.js
db.setUpConnection();

app.use( bodyParser.json() );

// Allow requests from any origin
app.use(cors());

app.use(express.static('build'));
app.set('views', './build');

app.use

app.get('/', (req, res) => {
	res.sendFile(`${process.cwd()}/build/index.html`);
});


app.get('/n100s', (req, res) => {

	n100Utils.listN100s().then( (data) => {
		res.send(data)
	});
})

app.post('/n100s', (req, res) => {

	n100Utils.createN100(req.body).then( (data) => {
		res.send(data)
	});

})


app.delete('/n100/:id', function (req, res) {
  res.send('Hello World!')
})

app.listen(config.serverPort, function () {
  console.log(`Example app listening on port ${config.serverPort}!`)
})