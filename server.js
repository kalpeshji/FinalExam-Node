const express = require('express')
const db = require('./Config/db');
const registerRoute = require('./Router/register.router');

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('Public'));
app.use(express.urlencoded({ extended: false }))
app.use('/', registerRoute)
app.listen(8000, () => {
    db()
    console.log("Server Is Running On http://localhost:8000")
})