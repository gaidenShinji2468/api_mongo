const app = require("./app");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const connect = require("./utils/connection");

function main() {
  try{
    connect();
    app.listen(PORT, () => {
      console.log(`Server runs on port ${PORT}`);
    });
  }catch(err) {
    console.error(err);
  }
}

main();
