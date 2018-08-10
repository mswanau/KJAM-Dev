const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();

const db_file = './data.db';
const port = 3000;

app.listen(port, () => {
    console.log('Server initialised.');
    // var db = new sqlite3.Database('./data.db');

    // db.serialize(() => {
    //     var stmt = db.prepare(
    //         `INSERT INTO users(
    //             id, first_name, last_name, email, password, phone, address, birth_date
    //         ) VALUES (?,?,?,?,?,?,?,?)`
    //     );
    //     stmt.run(['123456789', 'John', 'Doe', 'john@mail.com', 'password', '12345678', '1 Fake St', '1980-10-10']);
    //     stmt.finalize();

    //     db.each('SELECT * FROM users', function (err, row) {
    //         console.log(row.first_name)
    //     })

    // })
  });

app.route('/users').get((req, res) => {
    var db = new sqlite3.Database(db_file);
    db.serialize(() => {
        db.all('SELECT * FROM users', [], (err, rows) => {
            res.send(rows)
        })
    });

    db.close();
});