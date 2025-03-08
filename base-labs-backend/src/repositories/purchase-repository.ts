import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const PurchaseRepository = {
  async createPurchase(userId: string, quantity: number, state: boolean) {
    return await prisma.purchase.create({
      data: { userId, quantity, state },
    });
  },

  async getPurchaseCountByUser(userId: string, startTime: Date) {
    return await prisma.purchase.count({
      where: {
        userId,
        createdAt: { gte: startTime },
      },
    });
  },

  async getFailedAttempts(userId: string, startTime: Date) {
    return await prisma.purchase.count({
      where: {
        userId,
        createdAt: { gte: startTime },
        state: false,
      },
    });
  },

  async getAllPurchases() {
    return await prisma.purchase.findMany({
      orderBy: { createdAt: "desc" },
    });
  }
};
