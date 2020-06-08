const express = require('express')
const router = express.Router()

router.get('/get-data', [], async (req, res) => {
    return res.json({ success: true, msg: "welcome to mevn" }).status(200)

    // setTimeout(() => {
    //     return res.json({ success: true }).status(200)
    // }, 2000)
})

module.exports = router