const express = require('express')
const db = require('../../db')
const router = express.Router()

router.get('/get-featured-product', (req, res) => {
    userQuery = `SELECT * FROM products
WHERE is_featured_product = 1`

    db.query(userQuery, (err, featuredProduct) => {
        if (err) {
            console.log("Error quering featured product from DB")
            res.status(500).json({ error: 'Error querying MySQL' });
            return
        }
        featuredProduct ? res.status(200).json(featuredProduct[0]) : res.status(204).json('no featured product found!')
    });
});

module.exports = router;