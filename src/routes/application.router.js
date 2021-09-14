import { Router } from "../dependencies/oak.js";
import { ApplicationController } from "../controllers/controllers.js";
const ApplicationRouter = new Router();

ApplicationRouter.get("/applications", ApplicationController.getAllApps);

export { ApplicationRouter };
