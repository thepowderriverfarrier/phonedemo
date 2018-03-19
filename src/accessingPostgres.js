// npm to instal pg@6.1.0 or whatever is current for the OS in use 

const results = [];
// Grab data from the URL parameters
const id = req.params.todo_id;
// Grab data from http request
const data = { text: req.body.text, complete: req.body.complete };
// Get a Postgres client from the connection pool
pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if (err) {
        done();
        console.log(err);
        return res.status(500).json({ success: false, data: err });
    }
    // SQL Query > Update Data
    client.query('UPDATE items SET text=($1), complete=($2) WHERE id=($3)',
        [data.text, data.complete, id]);
    // SQL Query > Select Data
    const query = client.query("SELECT * FROM items ORDER BY id ASC");
    // Stream results back one row at a time
    query.on('row', (row) => {
        results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', function () {
        done();
        return res.json(results);
    });
});