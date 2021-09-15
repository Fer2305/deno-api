import { client } from "./db.connection.js";

function create(application) {
  return client.queryObject(
    "INSERT INTO applications (name, type, created_at) VALUES ($1, $2, $3)",
    application.name,
    application.type,
    application.created_at
  );
}

function findAll() {
  return client.queryArray("SELECT * FROM applications ORDER BY id");
}

function updateById(id, newData) {
  let query = `UPDATE applications SET name = $1, type = $2 WHERE id = $3`;
  let updated = client.queryObject(query, newData.name, newData.type, id);
  return updated;
}

function findById(id) {
  return client.queryObject(`SELECT * FROM applications WHERE id = $1`, id);
}

function removeById(id) {
  return client.queryObject(`DELETE FROM applications WHERE id = $1`, id);
}

export default { create, findAll, findById, removeById, updateById };
