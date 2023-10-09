import useData from "./useData";

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
    genres: string[];
  }

const useGames = () => useData<Game>("/games")

export {type platform, type Game};

export default useGames;

