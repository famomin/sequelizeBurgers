// Import the models
var db = require("../models");

module.exports = function(app) {

  //get route to show all the burgers on home page.
  app.get("/", function (req, res) {
    db.Burgers.findAll({}).then(function(results) {
      var burgerObject = {
        burgers: results
      };
      console.log(burgerObject);
      res.render("index", burgerObject);
    });
  });

  //post route to allow user to add a new burger.
  app.post("/", function (req, res) {
    db.Burgers.create ({
      burgers_name: req.body.burger_name
    }, {
      devoured: false
    }
  ).then(function (results) {
      res.redirect("/");
    });
  });

  //put route  for to update existing burgers
  app.put("/:id", function (req, res) {
    db.Burgers.update({
      devoured: true
    }, {
        where: {
          id: req.params.id
        }
      }).then(function(results) {
      res.redirect("/");
    });
  });
};
