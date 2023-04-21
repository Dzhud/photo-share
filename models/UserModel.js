module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "user", // will be pluralized
    {
      id: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      username: {
        type: DataTypes.STRING,
      }
      
    } //options such as static table name and timestamps false can be passed here as obj
  );

  return Users;
};