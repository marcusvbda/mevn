const authController = {
    loginGetData(req, res) {
        return res.json({ success: true, msg: "welcome to mevn" }).status(200)
    }
}
module.exports = authController