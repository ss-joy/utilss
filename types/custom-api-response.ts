export interface customApiResponse {
  status: "error" | "success";
  message:
    | "url not found"
    | "Error happend in the server"
    | "Error happend in the server or maybe you have a connection problem";
  data?: number[];
  error?: {
    code?: "NOT_FOUND" | string;
    details?: string;
  };
}
