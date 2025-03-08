import { useToast } from "vue-toastification";
import { useUserId } from "./useUserId";
import type { PurchaseHistoryResponse, PurchaseRequest } from "@/models/purchase.model";

export const usePurchase = () => {
  const toast = useToast();
  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase;
  const { getUserId } = useUserId();

  const postPurchaseCorn = async () => {
    try {
      const userId: string = getUserId();
      const requestData: PurchaseRequest = { userId };

      const response = await $fetch<PurchaseRequest>(`${apiBase}/purchase`, {
        method: "POST",
        body: requestData,
      });

      toast.success("Compra realizada con exito!");
      return response;
    } catch (error: any) {
      toast.error(error?.data?.message || "Error al procesar la compra");
      throw error;
    }
  };

  const getPurchaseHistory = async () => {
    try {
      const response = await $fetch<PurchaseHistoryResponse[]>(`${apiBase}/purchase/history`, {
        method: "GET",
      });

      return response;
    } catch (error: any) {
      toast.error("Error al obtener el historial de compras");
      throw error;
    }
  };

  return { postPurchaseCorn, getPurchaseHistory };
};
