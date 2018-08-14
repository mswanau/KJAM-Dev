const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const parser = require('body-parser');
const app = express();
const cors = require('cors');

var bcrypt = require('bcrypt');
const saltRounds = 10;
const db_file = './data.db';
const port = 3000;

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

// Set body parser
app.use(parser.json());

app.use(cors(corsOptions));


// Listen to specified port
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

// Route for returning all users
app.get('/users', (req, res) => {
    console.log('Get all users.');
    var db = new sqlite3.Database(db_file);
    db.serialize(() => {
        db.all('SELECT * FROM users', [], (err, rows) => {
            res.send(rows)
        })
    });
    db.close();
});

// Route for returning a single user, determined by email
app.get('/users/:email', (req, res) => {
    console.log('Get user.');
    var db = new sqlite3.Database(db_file);
    const email = req.params['email'];
    db.serialize(() => {
        db.get('SELECT * FROM users WHERE email = (?)', [email], (err, rows) => {
            if (err) {
                res.sendStatus(400)
            } else res.send(rows)
        })
    });
    db.close();
});

// Route for user authentication (login)
app.post('/users', (req, res) => {
    console.log('Login user request.')
    var email = req.body.uemail;
    var password = req.body.upassword; 
    var db = new sqlite3.Database(db_file);
    db.serialize(() => {
        db.get('SELECT * FROM users WHERE email = (?)', [email], (err, row) => {
            if (row == null) {
                res.sendStatus(401) // Return error if email not found
            } else if (bcrypt.compareSync(password, row.password)) {
                res.send(row)
            } else res.sendStatus(401) // Return error if password does not match
        })
    });
    db.close();
});

// Route for user registration
app.post('/users/register', (req, res) => {
    console.log('Register user request.');
    // Gather all inputs
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var phone = req.body.phone;
    var address = req.body.address;
    var suburb = req.body.suburb;
    var city = req.body.city;
    var postcode = req.body.postcode;
    var email = req.body.email;
    var password = bcrypt.hashSync(req.body.password, saltRounds);

    db.serialize(() => {
        var stmt = db.prepare(
            `INSERT INTO users(
                first_name, last_name, email, password, phone, address, suburb, city, postcode, birth_date
            ) VALUES (?,?,?,?,?,?,?,?,?,?)`
        );
        stmt.run([first_name, last_name, email, password, address, suburb, city, postcode, birth_date]);
        stmt.finalize();
        db.res.sendStatus(201);
    })

});