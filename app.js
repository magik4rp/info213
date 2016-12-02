var express = require('express');
var app = express();
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database(':memory:')


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

app.get('*', function(req, res){
  res.render('pages/404');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

// Database
db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='users'",
       function(err, rows) {
  if(err !== null) {
    console.log(err);
  }
  else if(rows === undefined) {
    db.run('CREATE TABLE "users" ' +
           '("id" INTEGER PRIMARY KEY AUTOINCREMENT, ' +
           '"title" VARCHAR(255), ' +
           'url VARCHAR(255))', function(err) {
      if(err !== null) {
        console.log(err);
      }
      else {
        console.log("SQL Table 'bookmarks' initialized.");
      }
    });
  }
  else {
    console.log("SQL Table 'bookmarks' already initialized.");
  }
});