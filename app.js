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
app.get('/pref/landlord/task', function(request, response) {
	var tasks = ['Cooking', 'Transportation', 'Housekeeping',
	 'Laundry', 'Grocery Shopping', 'Yardwork', 'Petcare', 'Computer Help', 'Running Errands'];
  response.render('pages/pref-landlord-task', {tasks: tasks});
});

app.get('/pref/landlord/tenant', function(request, response) {
	// var states = ["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"];
  var states = ["CA-California", "NV-Nevada", "OR-Oregon", "WA-Washington"];
  response.render('pages/pref-landlord-tenant', {states: states});
});
app.get('/pref/landlord/profile', function(request, response) {
  response.render('pages/pref-landlord-profile');
});
app.get('/pref/landlord/listing', function(request, response) {
  response.render('pages/pref-landlord-listing');
});
app.get('/confirmation', function(request, response) {
  response.render('pages/confirmation');
});
app.get('/message/:name', function(request, response) {
  var name = request.params.name;
  response.render('pages/individual-message', {name: name});
});
app.get('/application/:name', function(request, response) {
  var name = request.params.name;
  response.render('pages/application', {name: name});
});
app.get('/applications', function(request, response) {
	response.render('pages/applications')
});
app.get('/dashboard', function(request, response) {
	response.render('pages/dashboard')
});

app.get('*', function(req, res){
  res.render('pages/404');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
