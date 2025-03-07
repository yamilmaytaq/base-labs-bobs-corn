import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "../models/api-response/api-response.js";

export const apiResponseMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const originalJson = res.json;

  res.json = function (data: any) {
    if (data && data.status !== undefined && data.message !== undefined && data.code !== undefined) {
      return originalJson.call(this, data);
    }

    const apiResponse: ApiResponse<typeof data> = {
      status: true,
      message: "Operación exitosa",
      result: data,
      code: res.statusCode,
    };

    return originalJson.call(this, apiResponse);
  };

  next();
};
