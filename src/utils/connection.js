const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
  
  const connection = mongoose.connection;

  connection.once("open", () => {
    console.log("Database connected successfully");
  });
}
