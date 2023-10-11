import { useEffect, useState } from "react";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformsDropdownSelector from "./components/PlatformsDropdownSelector";
import { Platform } from "./hooks/usePlaforms";
import SortSelector from "./components/SortSelector";
import GenreSelector from "./components/GenreSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  order: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  useEffect(() => {
    console.log(gameQuery)
  })

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"` /* For the cell phone one column */,
        lg: `"nav nav" "aside main"` /* For the large devices two columns (over 1024px) */,
      }}
      templateColumns={{
        base: "1fr",
        lg: "220px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" pl={1} pr={5}>
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <HStack>
          <PlatformsDropdownSelector
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector onSelectSort={(order) => setGameQuery({...gameQuery, order})}/>
          <Show below="lg">
            <GenreSelector 
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} 
            selectedGenre={gameQuery.genre}
            />
          </Show>
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
