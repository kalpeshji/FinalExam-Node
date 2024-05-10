const registerModel = require("../Model/register.schema")

const addUser = async (req, res) => {
    const data = registerModel.create(req.body)
}

const getUser = async (req, res) => {
    res.render('Pages/register');
}
module.exports = { addUser , getUser}