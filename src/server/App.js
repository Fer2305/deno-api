import { Application } from "../dependencies/oak.js";
import { ApplicationRouter } from "../routes/routes.js";

const start = async (host, port) => {
  const app = new Application();
  app.addEventListener("listen", () => {
    console.log(`Server has started on ${host}:${port} 🚀`);
  });
  initMiddlewares(app);
  await app.listen({ port });
};

const initMiddlewares = (app) => {
  app.use(ApplicationRouter.routes());
};

export default start;
