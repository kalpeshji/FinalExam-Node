const express = require('express')
const db = require('./Config/db');
const registerRoute = require('./Router/register.router');
const loginRoute = require('./Router/login.router');

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('Public'));
app.use(express.urlencoded({ extended: false }))
app.use('/', registerRoute)
app.use('/login', loginRoute)
app.get('/home',(req,res) => {
    res.redirect('Pages/Home')
})
app.get('/myrecipes',(req,res) => {
    res.redirect('Pages/myRecipes')
})
app.get('/allrecipes',(req,res) => {
    res.redirect('Pages/recipeList')
})
app.get('/recipeslist',(req,res) => {
    res.redirect('Pages/recipeItem')
})
app.listen(8000, () => {
    db()
    console.log("Server Is Running On http://localhost:8000")
})