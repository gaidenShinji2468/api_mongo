const jwt = require("jsonwebtoken");
function verifyJWT(req, res, next) {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if(!authHeader?.startsWith("Bearer ")) res.sendStatus(401);

  const TOKEN = authHeader.split(" ")[1];

  jwt.verify(
    TOKEN,
    process.env.TOKEN_SECRET,
    (err, decoded) => {
      if(err) res.sendStatus(403);

      req.user = decoded.user;
      next();
    }
  );
}

module.exports = verifyJWT;
