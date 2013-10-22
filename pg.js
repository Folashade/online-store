// var pg = require('pg');
// 
// pg.connect(process.env.DATABASE_URL, function(err, client) {
//   var query = client.query('SELECT * FROM your_table');
// 
//   query.on('row', function(row) {
//     console.log(JSON.stringify(row));
//   });
// });

var pg = require('pg').native;

var client = new pg.Client({
	user: process.env.TODO_APP_DEV_USER,
	password: process.env.TODO_APP_DEV_PASSWORD,
	host: process.env.TODO_APP_DEV_HOST,
	port: process.env.TODO_APP_DEV_PORT,
	database: process.env.TODO_APP_DEV_DATABASE
})

client.connect(process.env.DATABASE_URL, function(err, client) {
  var query = client.query('SELECT * FROM your_table');

  query.on('row', function(row) {
    console.log(JSON.stringify(row));
  });
});

