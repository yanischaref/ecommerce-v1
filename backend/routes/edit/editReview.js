const express = require('express')
const db = require('../../db')
const router = express.Router()

router.post('/edit-review', (req, res) => {
    const { value, title, description, productId } = req.body
    addProductQuery = `UPDATE reviews
                SET value = ?, title = ?, review_body = ?
                WHERE id = ?`

    db.query(addProductQuery, [value, title, description, productId], (err, results) => {
        if (err) {
            console.log("Error edit review from DB")
            res.status(500).json({ error: 'Error edit MySQL' });
            return
        }
        console.log("here's the result of edit review: ", results)
        res.status(200).json(results)
    });
});

module.exports = router;