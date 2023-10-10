import { customApiResponse } from "@/types/custom-api-response";
import React, { useState } from "react";
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
  async function useFetchFunction() {
    setError(null);
    setIsLoading(true);
    console.log("api called");
    const response = await fetch(url, {
      method: method,
      body: body,
    });
    let errorData;
    if (!response.ok) {
      errorData = await response.json();
      console.log(errorData);
      setError(errorData.message);
      setIsLoading(false);
      return;
    }
    const parsedResponse = await response.json();
    setApiResponseData(parsedResponse);
    setIsLoading(false);
  }
  return {
    apiResponseData,
    error,
    isLoading,
    useFetchFunction,
  };
}
