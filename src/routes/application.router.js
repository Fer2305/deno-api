import { Router } from "../dependencies/oak.js";

const ApplicationRouter = new Router();

ApplicationRouter.get("/application", (ctx) => {
  ctx.response.body = "Hello World from Deno!";
});

export { ApplicationRouter };
