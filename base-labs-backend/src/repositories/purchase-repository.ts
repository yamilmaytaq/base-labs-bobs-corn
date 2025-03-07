import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const PurchaseRepository = {
  async createPurchase(userId: string, quantity: number) {
    return await prisma.purchase.create({
      data: { userId, quantity },
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
};
