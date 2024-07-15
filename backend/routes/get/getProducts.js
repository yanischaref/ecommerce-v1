const express = require('express')
const db = require('../../db')
const router = express.Router()

router.get('/get-products', (req, res) => {
    userQuery = `SELECT * FROM products`

    db.query(userQuery, (err, results) => {
        if (err) {
            console.log("Error quering products from DB")
            res.status(500).json({ error: 'Error querying MySQL' });
            return
        }
        results ? res.status(200).json(results) : res.status(204).json('no content found!')
    });
});

module.exports = router;