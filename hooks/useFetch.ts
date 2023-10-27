import { customApiResponse } from "@/types/custom-api-response";
import { useEffect, useState } from "react";
type useFetchProps = {
  url: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: string;
};
export default function useFetch({ url, method, body }: useFetchProps) {
  const [apiResponseData, setApiResponseData] =
    useState<customApiResponse | null>(null);
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showErrorToast, setShowErrorToast] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setShowErrorToast(false);
    }, 3000);
  }, [showErrorToast]);
  async function fetchData() {
    setError(null);
    setIsLoading(true);

    try {
      const apiResp = await fetch(url, {
        method: method ? method : "GET",
        body: body ? body : null,
      });
      let errorData;
      if (!apiResp.ok) {
        errorData = await apiResp.json();
        throw new Error(errorData.message);
      }
      const parsedResponse = await apiResp.json();
      setApiResponseData(parsedResponse);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setError(
        e.message
          ? e.message
          : "Something happended on the server. Please try again.",
      );
      setShowErrorToast(true);
      return;
    }
  }
  return {
    apiResponseData,
    error,
    isLoading,
    fetchData,
    showErrorToast,
  };
}
