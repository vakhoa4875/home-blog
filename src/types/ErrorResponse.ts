// types/ErrorResponse.ts
export interface ApiErrorResponse {
    message: string;
    code?: string; // ví dụ: "ERR_BAD_REQUEST"
    status?: number;
    details?: any; // nếu backend trả về thêm thông tin phụ
  }
  