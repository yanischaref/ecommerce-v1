const express = require('express')
const db = require('../../db')
const router = express.Router()

router.put('/edit-user-settings', (req, res) => {
    const { id, username, profile_picture, oldPassword, newPassword } = req.body
    console.log("hers's the body: ", req.body)
    checkIfPasswordIsCorrect = `SELECT id FROM users
                        WHERE password = ?`

    db.query(checkIfPasswordIsCorrect, [oldPassword], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Incorrect password!' });
            return
        }
        if(result.length === 0){
            res.status(500).json({ error: 'Incorrect password!' });
            return
        }
        editDataQuery = `UPDATE users
                        SET username = ?, profile_picture = ?, password = ?
                        WHERE id = ?`
        db.query(editDataQuery, [username, profile_picture, newPassword, id], (err, result) => {
            if (err) {
                console.log("Error editing data from DB")
                res.status(500).json({ error: 'error updating data! Try again later.'});
                return
            }
            res.status(200).json({ message: 'changed data successfully!' });
        });
    });
});

module.exports = router;