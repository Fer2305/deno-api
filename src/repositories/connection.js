import { Client } from "../dependencies/deno-postgres.js";

const client = new Client({
  user: "notifications",
  database: "notificationsdev",
  hostname: "pgdev.cfxwd2oauf8n.us-east-1.rds.amazonaws.com",
  password: "wH09zeruFF",
  port: 5432,
});

await client.connect();

export { client };
