import { useToast } from "vue-toastification";
import { useUserId } from "./useUserId";
import type { PurchaseRequest } from "@/models/purchase.model";

export const usePurchase = () => {
  const toast = useToast();
  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase;
  const { getUserId } = useUserId();

  const purchaseCorn = async () => {
    try {
      const userId: string = getUserId();
      const requestData: PurchaseRequest = { userId };

      const response = await $fetch<PurchaseRequest>(`${apiBase}/purchase`, {
        method: "POST",
        body: requestData,
      });

      toast.success("🌽 Compra realizada con éxito!");
      return response;
    } catch (error: any) {
      toast.error(error?.data?.message || "❌ Error al procesar la compra");
      throw error;
    }
  };

  return { purchaseCorn };
};
