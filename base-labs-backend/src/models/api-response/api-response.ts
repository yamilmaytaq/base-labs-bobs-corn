export interface ApiResponse<T> {
    status: boolean;
    message: string;
    result?: T;
    code: number;
  }
  