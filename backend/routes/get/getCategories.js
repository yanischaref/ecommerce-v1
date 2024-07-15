const express = require('express')
const db = require('../../db')
const router = express.Router()

router.get('/get-categories', (req, res) => {
    userQuery = `SELECT * FROM categories`

    db.query(userQuery, (err, results) => {
        if (err) {
            console.log("Error quering categories from DB")
            res.status(500).json({ error: 'Error querying MySQL' });
            return
        }
        res.status(200).json(results)
    });
});

module.exports = router;