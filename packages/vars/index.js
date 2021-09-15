import * as dotenv from "https://deno.land/x/dotenv/mod.ts"
import * as path from "https://deno.land/std@0.106.0/path/mod.ts";

const __dirname = path.dirname(path.fromFileUrl(import.meta.url));

const env = 'dev' //process.env.ENV_VARS || process.env.NODE_ENV || 'development'

const vars = dotenv.config({
    path: path.join(__dirname, 'env', `.env.${env}`),
    example: path.join(__dirname, 'env', '.env.example'),
})

export default {  
    port: parseInt(vars.PORT, 10),
    host: vars.HOST,
    db: {
        username: vars.DB_USERNAME,
        database: vars.DB_DATABASE,
        host: vars.DB_HOST,
        password: vars.DB_PASSWORD,
        port: parseInt(vars.DB_PORT, 10),
    }
}
