// DEPENDENCIES
const express = require('express')


// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express() // assigning app to hold express 
console.log ('__dirname', __dirname/'views')
// MIDDLEWARE 
app.set('views', __dirname + '/views') // __ dunder-score + directory name of the current module all the way from the root
app.set('view engine', 'jsx') // setting the view engine to jsx, there are different options out there
app.engine('jsx', require('express-react-views').createEngine()) // grabbing express-react-views to run that engine 
// app.use(express.static('public')) // setup serving static assets 
// app.use(express.urlencoded({extended: true})) //parse body content that we recieve 


// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!')
}) // handler root being called /

// Breads 
const breadsController = require ('./controllers/breads_controller.js')
    app.use('/breads', breadsController) // breads path will be named breadsController 


// // 404 Page 
// app.get('*', function(req, res){
// res.render('error404')
// })

//LISTEN
app.listen(PORT, function listening(){
  console.log(`Listening on http://localhost:${PORT}`);
})


// // LISTEN
// app.listen(PORT, () => {
//   console.log(`listening on http://localhost:${PORT}`);
// })
