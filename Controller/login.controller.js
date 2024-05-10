const loginModel = require("../Model/login.schema")

const getUser = async (req, res) => {
    res.render('Pages/login');
}
module.exports = { addUser , getUser}