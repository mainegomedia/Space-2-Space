module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
  	typeofuser: DataTypes.STRING,
  	firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    profilepicture: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY,
    gender: DataTypes.STRING,
    emailaddress: DataTypes.STRING,
    country: DataTypes.STRING,
    school: DataTypes.STRING,
    religion: DataTypes.STRING,
    language: DataTypes.STRING,
    staylength: DataTypes.STRING,
    introduction: DataTypes.STRING
  });


  return User;


};

  // console.log("User")
