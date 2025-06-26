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

async function getUserByName(name, pool) {
  try {
    const result = await pool.query("SELECT * FROM users WHERE name = $1", [
      name,
    ]);

    if (result.rows.length === 0) {
      return null;
    }

    return result.rows[0];
  } catch (error) {
    console.error("Error fetching user by name:", error);
  }
}

module.exports = { getUserByName, checkIfPasswordIsValid, encryptPassword };
