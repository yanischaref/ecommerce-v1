const express = require('express')
const db = require('../../db')
const router = express.Router()

router.post('/add-review', (req, res) => {
    const { value, title, description, product_id, userId } = req.body
    addProductQuery = `INSERT INTO reviews(value, title, review_body, product_id, sender_id)
                VALUES(?, ?, ?, ?, ?)`

    db.query(addProductQuery, [value, title, description, product_id, userId], (err, results) => {
        if (err) {
            console.log("Error adding review from DB")
            res.status(500).json({ error: 'Error adding MySQL' });
            return
        }
        console.log("here's the result of adding review: ", results)
        res.status(200).json(results)
    });
});

module.exports = router;