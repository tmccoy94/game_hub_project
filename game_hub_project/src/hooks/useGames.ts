import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlaforms";

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
// You'll have to check the useData hook for where these go directly
// So in summary:
// 1 - Selected Genre is determined at the App.tsx file and passed to the GameGrid Component
// 2 - The Gamegrid component uses this variation of the useData function
// 3 - The useData function takes in the two optional arguments
// The two optional arguments are: genre param for URL
// and the dependency for when the API is called using the useEffect hook (see useData file for exact deets)
const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>("/games", {params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id}}, [selectedGenre?.id, selectedPlatform?.id])

export {type platform, type Game};

export default useGames;

