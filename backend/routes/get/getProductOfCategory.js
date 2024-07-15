const express = require('express')
const db = require('../../db')
const router = express.Router()

router.get('/get-product-of-category/:categoryId', (req, res) => {
    const { categoryId } = req.params
    userQuery = `SELECT * FROM products WHERE category_id = ?`

    db.query(userQuery, [categoryId], (err, results) => {
        if (err) {
            console.log("Error quering products from DB")
            res.status(500).json({ error: 'Error querying MySQL' });
            return
        }
        results ? res.status(200).json(results) : res.status(204).json('no content found!')
    });
});

module.exports = router;