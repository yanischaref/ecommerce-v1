const express = require('express')
const db = require('../../db')
const router = express.Router()

router.post('/add-product', (req, res) => {
    const { name, price, image_url, description, storage, color, category_id } = req.body
    addProductQuery = `INSERT INTO products(name, price, image_url, description, storage, color, category_id)
                VALUES(?, ?, ?, ?, ?, ?, ?)`

    db.query(addProductQuery, [name, price, image_url, description, storage, color, category_id], (err, results) => {
        if (err) {
            console.log("Error adding product from DB")
            res.status(500).json({ error: 'Error adding MySQL' });
            return
        }
        console.log("here's the result of adding product: ", results)
        res.status(200).json(results)
    });
});

module.exports = router;