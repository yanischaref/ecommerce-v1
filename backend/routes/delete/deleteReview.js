const express = require('express')
const db = require('../../db')
const router = express.Router()

router.post('/delete-review', (req, res) => {
    const { reviewId} = req.body
    addProductQuery = `DELETE FROM reviews
                WHERE id = ?`

    db.query(addProductQuery, [reviewId], (err, results) => {
        if (err) {
            console.log("Error deleting review from DB")
            res.status(500).json({ error: 'Error deleting MySQL' });
            return
        }
        console.log("here's the result of deleting review: ", results)
        res.status(200).json(results)
    });
});

module.exports = router;