const express = require('express')
const breads = express.Router() // breads passed in server.js

const Bread = require('../models/bread.js')


// INDEX PAGE 
breads.get('/', (req, res) => {
  res.render('index', {breads: Bread})
  // res.send(Bread)
})

// // CREATE
// breads.post('/', (req, res) => {

//       if(req.body.hasGluten === 'on') {
//         req.body.hasGluten = 'true'
//       } else {
//         req.body.hasGluten = 'false'
//       }
//       Bread.push(req.body)
//       res.send('/breads')
//     })
    

// NEW 
// breads.get('/new', (req, res) => {
//   res.render('new')
// })


// SHOW  basically a placeholder after the  / breads end 
breads.get('/:arrayIndex', (req, res) => {
  res.send(Bread[req.params.arrayIndex])
  
//   const breadIndex = req.params.arrayIndex; 
//   const currentBread = Bread[breadIndex];

//   if (!currentBread) { //falsy 
//     res.render('error404')
//   } else {
//     res.render('Show', { 
//       bread: currentBread
//     })
//   }
})

module.exports = breads // exporting breads to server.js
