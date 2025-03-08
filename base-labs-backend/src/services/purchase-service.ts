import { PurchaseRepository } from "../repositories/purchase-repository.js";
import { purchaseConfig } from "../config/configuration.js";
import { PurchaseHistoryResponse } from "../models/purchase/purchase-history-response.js";
import { format } from "date-fns";

export const PurchaseService = {
  async purchaseCorn(userId: string) {
    const now = new Date();

    const lastAllowedTime = new Date(now);
    lastAllowedTime.setMinutes(lastAllowedTime.getMinutes() - purchaseConfig.cooldownMinutes);
    lastAllowedTime.setSeconds(lastAllowedTime.getSeconds() - purchaseConfig.cooldownSeconds);

    const purchaseCount = await PurchaseRepository.getPurchaseCountByUser(userId, lastAllowedTime);
    
    const failedAttempts = await PurchaseRepository.getFailedAttempts(userId, lastAllowedTime);

    if (failedAttempts >= purchaseConfig.maxAttempts) {
      throw new Error(
        `Has realizado demasiados intentos fallidos.`
      );
    }

    const isValidPurchase = purchaseCount < purchaseConfig.quantity;

    if (!isValidPurchase) {
      await PurchaseRepository.createPurchase(userId, 1, false);
      throw new Error(
        `Has alcanzado el limite de ${purchaseConfig.quantity} compras. Espera ${purchaseConfig.cooldownMinutes} minuto(s) y ${purchaseConfig.cooldownSeconds} segundo(s) antes de volver a comprar.`
      );
    }

    return await PurchaseRepository.createPurchase(userId, 1, true);
  },

  async getPurchaseHistory(): Promise<PurchaseHistoryResponse[]> {
    const purchases = await PurchaseRepository.getAllPurchases();

    return purchases.map((purchase) => ({
      userId: purchase.userId,
      status: purchase.state ? "Exito" : "Fallido",
      date: format(new Date(purchase.createdAt), "dd/MM/yyyy HH:mm"),
    }));
  }
};
