const express = require('express')
const db = require('../db')
const router = express.Router()


router.post('/register', (req, res) => {
  const { username, password } = req.body;
  const query = `SELECT * FROM users WHERE username = ?`;

  db.query(query, [username], (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    const existingUsername = results.find(user => user.username === username);

    if (existingUsername) {
      console.log("user Exists")
      res.status(400).json({ error: 'Username already in use' });
    } else {
      // Username doesn't exists, proceed to add user
      const newUserQuery = `INSERT INTO users (username, password)
                                VALUES (?, ?);`
      db.query(newUserQuery, [username, password], (err, result) => {
        if (err) {
          console.error('Error inserting user:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
        console.log("hers the result: ", result)
        res.status(201).json({ userId: result.insertId });
      });
    }
  });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = `SELECT * FROM users WHERE username = ? AND password = ?`;

  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    if (results.length === 0) {
      res.status(400).json({ message: 'User Not Found!' });
      return;
    }
    // const token = jwt.sign({ user_id: results[0].user_id }, 'jwtkey');
    const { password, ...other } = results[0];
    res.status(201).json({ user: other });
  });
});

module.exports = router;
