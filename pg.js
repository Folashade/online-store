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
  var query = client.query('SELECT * FROM surveys');

  query.on('row', function(row) {
    console.log(JSON.stringify(row));
  });
});

/*
pg.connect(dbUrl, function(err, client, done) {
    var i = 0, count = 0; 
    for (i = 0; i < 1000; i++) {
        client.query(
            'INSERT into post1 (title, body, created_at) VALUES($1, $2, $3) RETURNING id', 
            ['title', 'long... body...', new Date()], 
            function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('row inserted with id: ' + result.rows[0].id);
                }

                count++;
                console.log('count = ' + count);
                if (count == 1000) {
                    console.log('Client will end now!!!');
                    client.end();
                }
            });        
    }
});
*/