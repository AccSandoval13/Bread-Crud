const express = require('express')
const breads = express.Router() // breads passed in server.js

const Bread = require('../models/bread.js')


// INDEX PAGE 
breads.get('/', (req, res) => {
  res.render('index', {breads: Bread, title: 'Index Page'})
  // res.send(Bread)
})

// // CREATE
breads.post('/', (req, res) => {

      if(req.body.hasGluten === 'on') {
        req.body.hasGluten = true
      } else {
        req.body.hasGluten = false
      }
      Bread.push(req.body)
      res.redirect('/breads')
    })
    

// NEW 
breads.get('/new', (req, res) => {
  res.render('new')
}) 

// EDIT
breads.get('/:indexArray/edit', (req, res) => {
  res.render('edit', {
    bread: Bread[req.params.indexArray],
    index: req.params.indexArray
  })
})


// SHOW 
breads.get('/:arrayIndex', (req, res) => {
  // res.send(Bread[req.params.arrayIndex])
  const breadIndex = req.params.arrayIndex; 
  const currentBread = Bread[breadIndex];

  if (!currentBread) { // falsy 
    res.render('error404')
  } else {
    res.render('Show', { 
      bread: currentBread, 
      index: breadIndex 
    })
  }
})

// DELETE
breads.delete('/:indexArray', (req, res) => {
  console.log (req, query)
  // start (2) , delete count 
  Bread.splice(req.params.indexArray, 1)
  res.status(302).redirect('/breads')
}) //muteable method 

// UPDATE
breads.put('/:arrayIndex', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread[req.params.arrayIndex] = req.body
  res.redirect(`/breads/${req.params.arrayIndex}`)
})


module.exports = breads // exporting breads to server.js
