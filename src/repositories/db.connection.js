import { Client } from "../dependencies/deno-postgres.js";

const client = new Client({
  user: "deno",
  database: "denotechtalk",
  hostname: "pgdev.cfxwd2oauf8n.us-east-1.rds.amazonaws.com",
  password: "Asp128..",
  port: 5432,
});

await client.connect();

export { client };
