const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes");
const WHITE_LIST = [
  `http://localhost:${process.env.PORT || 8080}`
];
const options = {
  origin: (origin, callback) => {
    if(!origin || WHITE_LIST.includes(origin)) {
      callback(null, true);
    }else{
      callback(new Error("Not Allowed"));
    }
  }
};

app.use(express.json());
app.use(cors(options));
router(app);

module.exports = app;
