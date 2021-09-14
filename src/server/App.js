import Depent from "../../depent.js";

const { Application } = Depent;

const start = async (host, port) => {
  const app = new Application();
  app.addEventListener("listen", () => {
    console.log(`Server has started on ${host}:${port} 🚀`);
  });
  initMiddlewares(app);
  await app.listen({ port });
};

const initMiddlewares = (app) => {
  app.use((ctx) => {
    ctx.response.body = "Hello World from Deno!";
  });
};

export default start;
