var express = require('express');
var app = express();


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/home');
});
app.get('/sign-in', function(request, response) {
  response.render('pages/sign_in');
});
app.get('/sign-up', function(request, response) {
  response.render('pages/sign_up');
});

app.get('*', function(req, res){
  res.render('pages/404');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

