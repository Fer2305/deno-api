import { ApplicationService } from "../services/services.js";

async function getAllApps(ctx) {
  ctx.response.body = await ApplicationService.getAllApps();
}

export default { getAllApps };
