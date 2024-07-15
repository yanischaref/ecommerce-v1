const express = require('express')
const db = require('../../db')
const router = express.Router()

router.put('/edit-product', (req, res) => {
    console.log("hello from heer: ", req.body)
    const { name, price, image_url, description, storage, color, category_id, id } = req.body
    editCategoryQuery = `UPDATE products
                        SET name = ?, price = ?, image_url = ?, description = ?, storage = ?, color = ?, category_id = ?
                        WHERE id = ?`

    db.query(editCategoryQuery, [name, price, image_url, description, storage, color, category_id, id], (err, results) => {
        if (err) {
            console.log("Error editing the product from DB")
            res.status(500).json({ error: 'Error editing MySQL' });
            return
        }
        res.status(200).json(results)
    });
});

module.exports = router;