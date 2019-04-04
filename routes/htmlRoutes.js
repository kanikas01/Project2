var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Pet.findAll({}).then(function(dbPet) {
      res.render("index", {
        msg: "Welcome!",
        pets: dbPet
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/pet/:id", function(req, res) {
    db.Pet.findOne({ where: { id: req.params.id } }).then(function(dbPet) {
      res.render("pet", {
        pet: dbPet
      });
    });
  });

  // Load user page 
  app.get("/user/:id", function(req, res) {
    db.User.findOne({ where: { id: req.params.id } }).then(function(dbUser) {
      res.render("user", {
        user: dbUser
      });
    });
  });

  // Loads the add pet form
  app.get("/add-pet", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.render("add-pet", {
        users: dbUser,
        layout: "form.handlebars"
      });
    });
  });

  // Loads the add user form
  app.get("/add-user", function(req, res) {
    res.render("add-pet", {
      layout: "form.handlebars"
    });
  });
  
  // Loads all pets 
  app.get("/all-pets", function(req, res) {
    db.Pet.findAll({}).then(function(dbPet) {
      res.render("all-pets", {
        msg: "Welcome!",
        pets: dbPet
      });
    });
  });

  app.get("/all-users", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.render("all-users", {
        users: dbUser
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
