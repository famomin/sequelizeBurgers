module.exports = function(sequelize, DataTypes) {
    var Burgers = sequelize.define("Burgers", {

      //name for burger
      burger_name: {
        type: DataTypes.STRING
      },

      //devoured or NOT
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
    return Burgers;
};
