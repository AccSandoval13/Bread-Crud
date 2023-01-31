// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')


// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express() // assigning app to hold express 


// MIDDLEWARE 
app.set('views', __dirname + '/views') // __ dunder-score + directory name of the current module all the way from the root
app.set('view engine', 'jsx') // setting the view engine to jsx, there are different options out there
app.engine('jsx', require('express-react-views').createEngine()) // grabbing express-react-views to run that engine 
app.use(express.static('public')) // setup serving static assets 
app.use(express.urlencoded({extended: true})) //parse body content that we recieve 
app.use(methodOverride('_method'))

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!')
}) // handler root being called /

// Breads 
const breadsController = require ('./controllers/breads_controller.js')
    app.use('/breads', breadsController) // breads path will be named breadsController 


// 404 Page 
app.get('*', function(req, res){
res.render('error404')
})


// LISTEN FOR SERVER 
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)
