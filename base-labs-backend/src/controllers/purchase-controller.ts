import { Request, Response } from "express";
import { PurchaseService } from "../services/purchase-service.js";
import { PurchaseRequest } from "../models/purchase/purchase-request.js";
import { ApiResponse } from "../models/api-response/api-response.js";
import { PurchaseResponse } from "../models/purchase/purchase-response.js";

export const PurchaseController = {
  purchaseCorn: async (req: Request, res: Response): Promise<void> => {
    try {
      const { userId } = req.body as PurchaseRequest;
      if (!userId) {
        res.status(400).json(<ApiResponse<null>>{
          status: false,
          message: "El userId es obligatorio",
          code: 400,
        });
        return;
      }

      const purchase = await PurchaseService.purchaseCorn(userId);

      const responseData: PurchaseResponse = {
        userId: purchase.userId,
        quantity: purchase.quantity,
      };

      res.status(200).json(<ApiResponse<typeof purchase>>{
        status: true,
        message: "Compra realizada con exito",
        result: responseData,
        code: 200,
      });
    } catch (error: any) {
      res.status(error.message === `Error: ${error}.` ? 429 : 500).json(<ApiResponse<null>>{
        status: false,
        message: error.message || "Error interno del servidor",
        code: 500,
      });
    }
  },
};
