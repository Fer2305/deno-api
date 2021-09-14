import { ApplicationService } from "../services/services.js";

async function getAllApps(ctx) {
  ctx.response.body =
    " add to this response (at application.controller.js line 4) await ApplicationService.getAllApps()"; // await ApplicationService.getAllApps();
}

export default { getAllApps };
