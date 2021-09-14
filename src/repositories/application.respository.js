import { client } from "./db.connection.js";

function create(application) {
  return client.queryObject(
    "INSERT INTO applications (name, type, registration_date) VALUES ($1, $2, $3, $4)",
    application.name,
    application.type,
    application.registration_date
  );
}

function findAll() {
  return client.queryArray("SELECT * FROM applications ORDER BY id");
}

function updateById(id) {
  const lastestApplication = findById(id);
  let query = `UPDATE applications SET name = $1, type = $2 WHERE id = $3`;
  const updated = client.queryObject(
    query,
    application.name !== undefined ? application.name : lastestApplication.name,
    application.type !== undefined ? application.type : lastestApplication.type,
    id
  );
  return updated;
}

function findById(id) {
  return client.queryObject(`SELECT * FROM applications WHERE id = $1`, id);
}

function removeById(id) {
  return client.queryObject(`DELETE FROM applications WHERE id = $1`, id);
}

export default { create, findAll, findById, removeById, updateById };
