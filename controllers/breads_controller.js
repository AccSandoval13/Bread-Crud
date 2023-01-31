const express = require("express");
const breads = express.Router(); // breads passed in server.js

const Bread = require("../models/bread.js");

// INDEX PAGE
breads.get("/", (req, res) => {
  Bread.find().then(function (foundBreads) {
    console.log(foundBreads);

    res.render("index", { breads: foundBreads, title: "Index Page" });
  });
});

// // CREATE
breads.post("/", (req, res) => {
  console.log(req.body);
  if (!req.body.image) {
    req.body.image = undefined;
  }
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = true;
  } else {
    req.body.hasGluten = false;
  }
  Bread.create(req.body);
  res.redirect("/breads");
});

// NEW
breads.get("/new", (req, res) => {
  res.render("new");
});

// EDIT
breads.get("/:indexArray/edit", (req, res) => {
  res.render("edit", {
    bread: Bread[req.params.indexArray],
    index: req.params.indexArray,
  });
});

// SHOW
breads.get("/:id", (req, res) => {
  Bread.findById(req.params.id)
    .then((foundBread) => {
      res.render("show", {
        bread: foundBread,
      });
    })
    .catch(error => {
      console.log(error)
      res.render("error404");
    });
  
});

// DELETE
breads.delete("/:indexArray", (req, res) => {
  console.log(req, query);
  // start (2) , delete count
  Bread.splice(req.params.indexArray, 1);
  res.status(302).redirect("/breads");
}); //muteable method

// UPDATE
breads.put("/:arrayIndex", (req, res) => {
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = true;
  } else {
    req.body.hasGluten = false;
  }
  Bread[req.params.arrayIndex] = req.body;
  res.redirect(`/breads/${req.params.arrayIndex}`);
});

module.exports = breads; // exporting breads to server.js
