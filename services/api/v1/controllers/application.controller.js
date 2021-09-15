import ApplicationService from "../services/application.service.js"
import db from '../../../../packages/db/models/index.js'

async function getAllApps(ctx) {
  try {
    const applications = await db.Application.all();
    if (!applications) {
      throw new Error("application:noContent")
    }
    ctx.response.body = { data: applications, message: "success" }
  } catch (error) {
    ctx.response.status = 400;
    ctx.response.body = `Something was wrong: ${error.message}`
  }
}

async function getApp(ctx) {
  try {
    const { id } = ctx.params;
    if (!id) {
      throw new Error("application:noId")
    }
    const app = await db.Application.find(parseInt(id, 10));
    
    if (!app) {
      throw new Error("application:noContent")
    }

    ctx.response.body = { data: app, message: "success" };
  } catch (error) {
    ctx.response.status = 400;
    ctx.response.body = `Something was wrong: ${error.message}`;
  }
}

async function createApp(ctx) {
  try {
    
    const { name, type } = await ctx.request.body().value;

    if (!type || !name) {
      throw new Error("application:ParamsMissing")
    }

    const app = await db.Application.create({ type, name });
    if (!app) {
      throw new Error("application:cantCreateApp")
    }

    ctx.response.body = { data: app, message: "success" };
  } catch (error) {
    ctx.response.status = 400;
    ctx.response.body = `Something was wrong: ${error.message}`;
  }
}

async function updateApp(ctx) {
  try {
    const { id } = ctx.params;
    if (!id) { 
      throw new Error("application:noId")
    }

    const { name, type } = await ctx.request.body().value;

    if (!type || !name) {
      throw new Error("application:ParamsMissing")
    }

    const app = await db.Application.where('id', parseInt(id, 10)).update({ name, type });
    if (!app) {
      throw new Error("application:cantUpdateApp")
    }

    ctx.response.body = { data: app, message: "success" };
  } catch (error) {
    ctx.response.status = 400;
    ctx.response.body = `Something was wrong: ${error.message}`;
  }
}

async function deleteApp(ctx) {
  try {
    const { id } = ctx.params;
    if (!id) {
      throw new Error("application:noId")
    }

    const app = await db.Application.where('id', parseInt(id, 10)).delete();
    if (!app) {
      throw new Error("application:cantRemoveApp")
    }

    ctx.response.body = { data: app, message: "success" };
  } catch (error) {
    ctx.response.status = 400;
    ctx.response.body = `Something was wrong: ${error.message}`;
  }
}

export default { getAllApps, getApp, createApp, updateApp, deleteApp };
