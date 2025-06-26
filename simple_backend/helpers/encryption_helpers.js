const bcrypt = require("bcrypt");

async function encryptPassword(password) {
  const saltRounds = 10;
  try {
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    console.error(error.message);
  }
}

async function checkIfPasswordIsValid(plainTextPassword, hashedPassword) {
  try {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
  } catch (error) {
    console.error("error happened when validating password");
  }
}

module.exports = { getUserByName, checkIfPasswordIsValid, encryptPassword };
