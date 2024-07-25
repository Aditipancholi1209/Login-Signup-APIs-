const express = require('express')  //importing express

const app = express(); //start express server
const hbs = require('hbs')
const path = require('path')
const collection = require('./mongo')

const tempelatePath = path.join(__dirname, '../Templates')
const publicPath = path.join(__dirname, '../public')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.set('view engine', hbs)
app.set('view engine', 'hbs');

app.set('views', tempelatePath)

app.get('/signup', (req, res) => {
    res.render('signup')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.post(('/' || '/login'), async (req, res) => {
    const data = {
        name: req.body.name,
        password: req.body.password
    }
    await collection.insertMany([data])
   
})

app.listen(9000, () => {
    console.log('Port has been connected!')
})