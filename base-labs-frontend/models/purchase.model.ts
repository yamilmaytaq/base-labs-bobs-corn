export interface PurchaseRequest {
  userId: string;
}

export interface PurchaseHistoryResponse {
  userId: string;
  status: string;
  date: string;
}
