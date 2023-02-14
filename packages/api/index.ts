import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.join(__dirname, '../..', '.env'),
})

export type { AppRouter } from "./src/router";
export { appRouter } from "./src/router";

export { createContext } from "./src/context";
export type { Context } from "./src/context";
