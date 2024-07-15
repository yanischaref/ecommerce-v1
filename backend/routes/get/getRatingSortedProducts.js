const express = require('express')
const db = require('../../db')
const router = express.Router()

router.get('/get-rating-sorted-products/:limit', (req, res) => {
    const limit = parseInt(req.params.limit) || 10;
    userQuery = `SELECT *
                FROM products
                ORDER BY rating DESC
                LIMIT ?
`

    db.query(userQuery, [limit], (err, results) => {
        if (err) {
            console.log("Error quering rating sorted products from DB")
            res.status(500).json({ error: 'Error querying MySQL' });
            return
        }
        results ? res.status(200).json(results) : res.status(204).json('no rating sorted products found!')
    });
});

module.exports = router;