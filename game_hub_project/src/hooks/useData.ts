import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
    count: number;
    next: string;
    previous: string;
    results: T[];
}


// Generic type param == T
// Just symbol to fill in the spot that will be filled with specific call/service type
const useGenres = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { ...requestConfig, signal: controller.signal})
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);})
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false)});

    return () => controller.abort();
  }, deps ? [...deps] : [])

//   (error === "canceled" ? setError("") : error)

  return { data, error, isLoading }
};

export default useGenres;