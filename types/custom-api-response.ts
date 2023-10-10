export interface customApiResponse {
  status: "error" | "success";
  message: "url not found" | "Error happend in the server" | string;
  data?: number[];
  error?: {
    code?: "NOT_FOUND" | string;
    details?: string;
  };
}
