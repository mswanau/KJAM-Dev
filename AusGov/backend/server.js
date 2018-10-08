const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const parser = require('body-parser');
const app = express();
const cors = require('cors');

var bcrypt = require('bcrypt');
var saltRounds = 10;
const db_file = './data.db';
const port = 3000;

const MAXID = 999999999;
const MINID = 100000000;

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
    // TODO delete and refill database
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
    var db = new sqlite3.Database(db_file);

    // Generate random ID
    var id = Math.floor(Math.random() * MAXID) + MINID

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
    var birth_date = req.body.birth_date;
    var guardian1 = req.body.guardian1;
    var guardian2 = req.body.guardian2;
    var partner = req.body.partner;

    db.serialize(() => {
        var stmt = db.prepare(
            `INSERT INTO users(
                id, first_name, last_name, email, password, phone, address, suburb, city, state, 
                postcode, birth_date, guardian1, guardian2, partner
            ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
        );
        stmt.run([id, first_name, last_name, email, password, phone, address, 
            suburb, city, postcode, birth_date, guardian1, guardian2, partner]);
        stmt.finalize();

        // Return the newly created user
        db.get('SELECT * FROM users WHERE id = (?)', [id], (err, row) => {
            res.send(row)
        })
    })
    db.close();
});

// Route for password reset
app.put('/users/reset', (req, res) => {
    console.log('User password reset.');
    var db = new sqlite3.Database(db_file);

    var email = req.body.email;
    var password = bcrypt.hashSync(req.body.password, saltRounds);

    var stmt = db.prepare(`UPDATE users SET password = ? WHERE email = ?`);
    stmt.run([password, email]);
    stmt.finalize();
    db.close();
})






// Routes for University-side API usage

app.put('/student/update', (req, res) => {
    console.log('Student update.');
    var db = new sqlite3.Database(db_file);

    var studentNo = req.body.studentNo;
    var course = req.body.course;
    console.log(course);
    var startDate = req.body.startDate;
    var endDate = req.body.endDate;
    var id = req.body.id;
    var institute = req.body.institute

    // Insert student details
    var stmt = db.prepare(`INSERT INTO students (institute, student_id, course, start_date, end_date) VALUES (?,?,?,?,?)`);
    stmt.run([institute, studentNo, course, startDate, endDate]);
    stmt.finalize();

    // Get new reference ID
    var stmt = db.prepare(`SELECT id FROM students WHERE (institute, student_id) = (?,?)`);
    var referenceId = stmt.run([institute, studentNo]);
    stmt.finalize();

    // Update users table
    var stmt = db.prepare(`UPDATE users SET student = ? WHERE id = ?`);
    var referenceId = stmt.run([referenceId, id]);
    stmt.finalize();

    db.close();
})

// Return the student details of a particular user
app.get('/student/:id', (req, res) => {
    console.log('Get student.');
    var db = new sqlite3.Database(db_file);
    const id = req.params['id'];
    console.log(id);
    db.serialize(() => {
        db.get('SELECT * FROM students WHERE id = (?)', [id], (err, rows) => {
            if (err) {
                res.sendStatus(400)
            } else res.send(rows)
        })
    });
    db.close();
});

