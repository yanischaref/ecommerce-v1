const express = require('express')
const db = require('../../db')
const router = express.Router()

router.put('/edit-category', (req, res) => {
    const { name, photo_url, parent_category, category_id } = req.body
    editCategoryQuery = `UPDATE categories
                        SET name = ?, photo_url = ?, parent_category = ?
                        WHERE id = ?`

    db.query(editCategoryQuery, [name, photo_url, parent_category, category_id], (err, results) => {
        if (err) {
            console.log("Error editing the category from DB")
            res.status(500).json({ error: 'Error editing MySQL' });
            return
        }
        res.status(200).json(results)
    });
});

module.exports = router;