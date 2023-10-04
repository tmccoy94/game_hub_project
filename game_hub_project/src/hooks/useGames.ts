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
  }
  
  interface FetchGames {
    count: number;
    results: Game[];
  }

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGames>("/games", { signal: controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)});

    return () => controller.abort();
  }, []);

  (error === "canceled" ? setError("") : error)

  return {games, error}
}

export {type platform, type Game, type FetchGames};

export default useGames;

