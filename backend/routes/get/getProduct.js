const express = require('express')
const db = require('../../db')
const router = express.Router()

router.get('/get-product/:productId', (req, res) => {
    const { productId } = req.params
    userQuery = `SELECT * FROM products WHERE id = ?`

    db.query(userQuery, [productId], (err, results) => {
        if (err) {
            console.log("Error quering product from DB")
            res.status(500).json({ error: 'Error querying MySQL' });
            return
        }
        results ? res.status(200).json(results[0]) : res.status(204).json('no content found!')
    });
});

module.exports = router;