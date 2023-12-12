import express from "express";
import { config } from "dotenv";
import morgan from 'morgan';
import appRouter from "./routes/index.js";
config();
const app = express();
//MIDDLEWARES
app.use(express.json());
//remove it in productuin
app.use(morgan("dev"));
//api structure for our application
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map