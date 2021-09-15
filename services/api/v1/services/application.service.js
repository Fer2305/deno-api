import ApplicationRespository from "../repositories/application.respository.js";

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

const getApp = async (id) => {
  const app = await findById(id);
  let result = {};
  app.rows.map((row) => {
    result = row;
  });

  return result;
};

const createApp = async (application) => {
  const newApp = {
    name: String(application.name),
    type: String(application.type),
    created_at: new Date(),
  };
  await create(newApp);
  return newApp;
};

const updateApp = async (id, application) => {
  const newData = {
    name: String(application.name),
    type: String(application.type),
  };
  await updateById(id, newData);
  const result = await getApp(id);
  return Object.keys(result).length !== 0 ? result : null;
};

const removeApp = async (id) => {
  const result = await getApp(id);
  await removeById(id);
  return Object.keys(result).length !== 0 ? result : null;
};

export default { getAllApps, getApp, createApp, updateApp, removeApp };
