import { useEffect, useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformsDropdownSelector from "./components/PlatformsDropdownSelector";
import { Platform } from "./hooks/usePlaforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  useEffect(() => {
    console.log(selectedPlatform);
  });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"` /* For the cell phone one column */,
        lg: `"nav nav" "aside main"` /* For the large devices two columns (over 1024px) */,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" pl={1} pr={5}>
          <GenreList
            onSelectGenre={(selectedGenre) => setSelectedGenre(selectedGenre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformsDropdownSelector
          onSelectPlatform={(selectedPlatform) =>
            setSelectedPlatform(selectedPlatform)
          }
        />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
