import { ApplicationRespository } from "../repositories/respositories.js";

const { create, findAll, findById, removeById, updateById } =
  ApplicationRespository;

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
