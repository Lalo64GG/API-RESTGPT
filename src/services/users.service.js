const db = require("../config/db.config");
const bycript = require("bcrypt");
const uuid = require("uuid");

const createUser = async ({ name, email, password }) => {
  const connection = await db.createConnection();

  const userId = uuid.v4();

  const sql =
    "INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)";

  const hashedPassword = await bycript.hash(password, 10);

  const result = await connection.run(sql, userId, name, email, hashedPassword);

  if (result.lastID == 0) {
    throw new Error("User not inserted successfully");
  }

  return result;
};

const getAll = async () => {
  const connection = await db.createConnection();
  const sql = `SELECT id, name, email FROM users`;
  const result = await connection.all(sql);
  connection.close();
  return result;
};

const getById = async (id) => {
  const connection = await db.createConnection();
  const sql = `SELECT id, name, email FROM users WHERE id = ?`;
  const result = await connection.all(sql, id);
  connection.close();
  return result;
};

const update = async (id, { name, email, password }) => {
  const connection = await db.createConnection();
  const sql = `UPDATE users SET name =?, email =?, password =? WHERE id =?`;
  const hashedPassword = await bycript.hash(password, 10);

  const result = await connection.run(sql, name, email, hashedPassword, id);
  connection.close();

  if (result.changes == 0) {
    throw new Error("Departamento no actualizado");
  }
  return result;
};

const deletedById = async (id) => {
    const connection = await db.createConnection();
    const sql = `DELETE FROM users WHERE id =?`;
    const result = await connection.run(sql, id);
    connection.close();

    if (result.changes == 0) {
        throw new Error("Departamento no actualizado");
    }

    return result;
}

module.exports = {
  createUser,
  getAll,
  getById,
  update,
  deletedById,
};
