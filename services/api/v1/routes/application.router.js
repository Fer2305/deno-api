import { Router } from "oak/mod.ts";
import ApplicationController from "../controllers/application.controller.js";

const ApplicationRouter = new Router();

ApplicationRouter.get("/applications", ApplicationController.getAllApps);
ApplicationRouter.get("/applications/:id", ApplicationController.getApp);
ApplicationRouter.put("/applications/:id", ApplicationController.updateApp);
ApplicationRouter.delete("/applications/:id", ApplicationController.deleteApp);
ApplicationRouter.post("/applications", ApplicationController.createApp);

export { ApplicationRouter };
