var express = require('express');
var routes = require('./routes')
var app = express();

app.use('/', routes);
app.use(express.static(__dirname + '/public'));

app.engine('html', require('atpl').__express);
app.set('devel', false);
app.set('view engine', 'html');
app.set('view cache', true);
app.set('views', __dirname + '/templates');

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
