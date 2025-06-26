// middleware that checks if authorization is included in the request header and
// then authenticates the users credentials(username and password)
export function basicAuth() {
  return (req, res, next) => {
    const authorization = req.get("Authorization");
    if (authorization && authorization.startsWith("Basic ")) {
      // Extract and decode base64
      const base64Credentials = authorization.split(" ")[1];
      const credentials = Buffer.from(base64Credentials, "base64").toString(
        "utf-8"
      );
      const [username, password] = credentials.split(":");
      // Authenticate the users credentials
      if (username === "user" && password === "pass") {
        next();
      } else {
        res.status(401).send("please provide correct credentials");
      }
    } else {
      res.status(401).send("please provide authentication");
    }
  };
}
