import { Request, Response } from "express";
import { PurchaseService } from "../services/purchase-service.js";
import { PurchaseRequest } from "../models/purchase/purchase-request.js";
import { ApiResponse } from "../models/api-response/api-response.js";
import { PurchaseResponse } from "../models/purchase/purchase-response.js";
import { PurchaseHistoryResponse } from "../models/purchase/purchase-history-response.js";

export const PurchaseController = {
  async purchaseCorn(req: Request, res: Response): Promise<void> {
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

      const responseData = {
        userId: purchase.userId,
        quantity: purchase.quantity,
        state: purchase.state,
      };

      res.status(200).json(<ApiResponse<typeof purchase>>{
        status: true,
        message: purchase.state ? "Compra realizada con exito" : "Compra fallida, intentos superados",
        result: responseData,
        code: purchase.state ? 200 : 429,
      });
    } catch (error: any) {
      const isTooManyRequests = error.message.includes("Has alcanzado el limite") || error.message.includes("demasiados intentos fallidos");

      res.status(isTooManyRequests ? 429 : 500).json(<ApiResponse<null>>{
        status: false,
        message: error.message || "Error interno del servidor",
        code: isTooManyRequests ? 429 : 500,
      });
    }
  },
  async getPurchaseHistory(req: Request, res: Response): Promise<void> {
    try {
      const purchases = await PurchaseService.getPurchaseHistory();

      res.status(200).json(<ApiResponse<PurchaseHistoryResponse[]>>{
        status: true,
        message: "Historial de compras obtenido correctamente",
        result: purchases,
        code: 200,
      });
    } catch (error: any) {
      res.status(500).json(<ApiResponse<null>>{
        status: false,
        message: "Error al obtener el historial de compras",
        code: 500,
      });
    }
  }
};
