import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import purchaseRoutes from "./routes/purchase-routes.js";
import { apiResponseMiddleware } from "./middlewares/api-response-middleware.js";
import { appConfig } from "./config/configuration.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.use(apiResponseMiddleware);

app.use("/api/purchase", purchaseRoutes);

const PORT = appConfig.port;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
