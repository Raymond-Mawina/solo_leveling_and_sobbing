const { encryptPassword } = require("./db_helpers");
const pool = require("./db_config");

async function createUsersTable(pool) {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        name TEXT PRIMARY KEY,
        password TEXT NOT NULL
      );
    `);
  } catch (err) {
    console.error("Error creating users table:", err);
  }
}

async function addUserToDB(name, password, pool) {
  try {
    // encypt the password
    const encryptedPassword = await encryptPassword(password);
    // Insert the user into the table
    await pool.query(
      "INSERT INTO users (name, password) VALUES ($1, $2) ON CONFLICT (name) DO NOTHING",
      [name, encryptedPassword]
    );
  } catch (err) {
    console.error("Error inserting user:", err);
  }
}
