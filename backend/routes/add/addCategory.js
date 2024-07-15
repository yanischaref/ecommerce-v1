const express = require('express')
const db = require('../../db')
const router = express.Router()

router.post('/add-category', (req, res) => {
    const { name, photo_url, parent_category } = req.body
    addCategoryQuery = `INSERT INTO categories(name, photo_url, parent_category)
                        VALUES(?, ?, ?)`

    db.query(addCategoryQuery, [name, photo_url, parent_category], (err, results) => {
        if (err) {
            console.log("Error adding the category from DB")
            res.status(500).json({ error: 'Error adding MySQL' });
            return
        }
        console.log("here's the result of adding the category: ", results)
        res.status(200).json(results)
    });
});

module.exports = router;