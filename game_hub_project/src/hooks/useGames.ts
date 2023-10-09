import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import CanceledError from "axios"

interface platform {
    id: number;
    name: string;
    slug: string;
}

interface Game {
    id: number;
    name: string;
    background_image:  string;
    parent_platforms: { platform: platform }[];
    metacritic: number;
  }
  
  interface FetchGames {
    count: number;
    results: Game[];
  }

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchGames>("/games", { signal: controller.signal})
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);})
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false)});

    return () => controller.abort();
  }, []);

  (error === "canceled" ? setError("") : error)

  return { games, error, isLoading }
}

export {type platform, type Game, type FetchGames};

export default useGames;

