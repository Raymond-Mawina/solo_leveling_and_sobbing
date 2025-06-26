const pool = require("../db/db_config");
const { getUserByName, checkIfPasswordIsValid } = require("../db/db_helpers");

// middleware that checks if authorization is included in the request header and
// then authenticates the users credentials(username and password)
function basicAuth() {
  return async (req, res, next) => {
    const authorization = req.get("Authorization");
    if (authorization && authorization.startsWith("Basic ")) {
      // Extract and decode base64
      const base64Credentials = authorization.split(" ")[1];
      const credentials = Buffer.from(base64Credentials, "base64").toString(
        "utf-8"
      );
      const [username, password] = credentials.split(":");
      // Authenticate the users credentials
      const user = await getUserByName(username, pool);

      if (user === null) {
        res.status(401).send("please provide correct credentials");
      } else {
        const isPasswordValid = await checkIfPasswordIsValid(
          password,
          user.password,
          pool
        );

        if (isPasswordValid) {
          next();
        } else {
          res.status(401).send("please provide correct credentials");
        }
      }
    } else {
      res.status(401).send("please provide authentication");
    }
  };
}

module.exports = basicAuth;
