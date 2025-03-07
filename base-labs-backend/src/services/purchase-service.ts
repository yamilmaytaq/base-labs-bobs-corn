import { PurchaseRepository } from "../repositories/purchase-repository.js";
import { purchaseConfig } from "../config/configuration.js";

export const PurchaseService = {
  async purchaseCorn(userId: string) {
    const now = new Date();

    const lastAllowedTime = new Date(now);
    lastAllowedTime.setMinutes(lastAllowedTime.getMinutes() - purchaseConfig.cooldownMinutes);
    lastAllowedTime.setSeconds(lastAllowedTime.getSeconds() - purchaseConfig.cooldownSeconds);

    const purchaseCount = await PurchaseRepository.getPurchaseCountByUser(userId, lastAllowedTime);

    if (purchaseCount >= purchaseConfig.quantity) {
      throw new Error(
        `Has alcanzado el límite de ${purchaseConfig.quantity} compras. Espera ${purchaseConfig.cooldownMinutes} minuto(s) y ${purchaseConfig.cooldownSeconds} segundo(s) antes de volver a comprar.`
      );
    }

    return await PurchaseRepository.createPurchase(userId, 1);
  },
};
