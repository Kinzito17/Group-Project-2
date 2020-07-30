// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });


  app.delete("/api/buy/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Plant.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPlant) {
      res.json(dbPlant);
    });

  });
  
};