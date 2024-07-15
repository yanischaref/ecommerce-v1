const express = require('express')
const db = require('../db')
const router = express.Router()

router.put('/database-query', (req, res) => {
    const {query} = req.body

    db.query(query, [query], (err, results) => {
        if (err) {
            console.log("Error quering from DB")
            res.status(500).json({ error: 'Error querying MySQL' });
            return
        }
        results ? res.status(200).json(results) : res.status(204).json('no date found!')
    });
});

module.exports = router;