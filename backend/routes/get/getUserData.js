const express = require('express')
const db = require('../../db')
const router = express.Router()

router.get('/get-userdata/:userId', (req, res) => {
    const { userId } = req.params
    userQuery = `SELECT id, username, profile_picture, user_type FROM users WHERE id = ?`
    db.query(userQuery, [userId], (err, results) => {
        if (err) {
            console.log("Error quering user from DB")
            res.status(500).json({ error: 'Error querying MySQL' });
            return
        }
        results ? res.status(200).json(results[0]) : res.status(204).json('no user found!')
    });
});

module.exports = router;