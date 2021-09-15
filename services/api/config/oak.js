import { Application } from "oak/mod.ts";
import { ApplicationRouter } from "../v1/routes/index.js";

const start = async (host, port) => {
  const app = new Application();
  app.addEventListener("listen", () => {
    console.log(`Server has started on ${host}:${port} 🚀`);
  });
  initMiddlewares(app)
  await app.listen({ port });
};

const initMiddlewares = (app) => {
  app.use(ApplicationRouter.routes());
  app.use(ApplicationRouter.allowedMethods());

  app.use((ctx) => {
    ctx.response.body = { message: "Deno REST API is running!" };
  });
};

export default start;