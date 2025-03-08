import dotenv from "dotenv";

dotenv.config();

// APP CONFIG
export const appConfig = {
  port: process.env.PORT || "3000"
};


// CONFIG PURCHASE
export const purchaseConfig = {
  quantity: parseInt(process.env.PURCHASE_QUANTITY || "1", 10),
  cooldownMinutes: parseInt(process.env.PURCHASE_COOLDOWN_MINUTES || "1", 10),
  cooldownSeconds: parseInt(process.env.PURCHASE_COOLDOWN_SECONDS || "0", 10),
  maxAttempts: parseInt(process.env.MAX_ATTEMPTS || "10", 10),
};