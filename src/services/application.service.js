import {
  create,
  findAll,
  findById,
  removeById,
  updateById,
} from "../repositories/application.respository.js";

const getAllApps = async () => {
  const apps = await findAll();

  let result = [];

  apps.rows.map((app) => {
    let obj = {};

    apps.rowDescription.columns.map((colum, i) => {
      obj[colum.name] = app[i];
    });
    result.push(obj);
  });
  return result;
};

export default { getAllApps };
