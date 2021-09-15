import { Database, Model, PostgresConnector } from 'https://deno.land/x/denodb/mod.ts';
import * as path from "https://deno.land/std@0.106.0/path/mod.ts";

const __dirname = path.dirname(path.fromFileUrl(import.meta.url))
const __filename = path.fromFileUrl(import.meta.url)
const basename = path.basename(__filename)
const models = []

const connection = new PostgresConnector({
  username: "deno",
  database: "denotechtalk",
  host: "pgdev.cfxwd2oauf8n.us-east-1.rds.amazonaws.com",
  password: "Asp128..",
  port: 5432,
});

const db = new Database(connection);

const a = await Promise.all(Array.from(Deno.readDirSync(__dirname))
  .filter(({ name: file }) => {
    const curPath = path.join(__dirname, file)
    if (Deno.statSync(curPath).isDirectory) {
      return true
    }

    return false
  })
  .map(async ({ name: folder }) => {
    const curPath = path.join(__dirname, folder)
    return await Promise.all(Array.from(Deno.readDirSync(curPath))
      .filter(({ name: file }) => {
        return (
          file.indexOf('.') !== 0 &&
          file !== basename &&
          file.slice(-3) === '.js'
        )
      })
      .map(async ({ name: file }) => {
          const fullPath = path.join(__dirname, folder, file)
          const model = await import(fullPath)
          db.link([model.default])
          db[model.default.model] = model.default  
      })
    )
  })
)

export default db