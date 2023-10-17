import { useEffect, useState } from "react";
import { Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformsDropdownSelector from "./components/PlatformsDropdownSelector";
import { Platform } from "./hooks/usePlaforms";
import SortSelector from "./components/SortSelector";
import GenreSelector from "./components/GenreSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  order: string | null;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  useEffect(() => {
    console.log(gameQuery);
  });

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
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
          onLogoClick={() =>
            setGameQuery({
              genre: null,
              platform: null,
              order: null,
              searchText: "",
            })
          }
        ></NavBar>
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
        <Show breakpoint="(min-width: 650px)">
          <GameHeading gameQuery={gameQuery} />
          <HStack>
            <PlatformsDropdownSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <Show above="lg">
              <SortSelector
                onSelectSort={(order) => setGameQuery({ ...gameQuery, order })}
              />
              <Button
                onClick={() =>
                  setGameQuery({
                    genre: null,
                    platform: null,
                    order: null,
                    searchText: "",
                  })
                }
              >
                Clear Filters
              </Button>
            </Show>

            <Show below="lg">
              <SortSelector
                onSelectSort={(order) => setGameQuery({ ...gameQuery, order })}
              />
              <GenreSelector
                onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
                selectedGenre={gameQuery.genre}
              />
              <Button
                onClick={() =>
                  setGameQuery({
                    genre: null,
                    platform: null,
                    order: null,
                    searchText: "",
                  })
                }
              >
                Clear Filters
              </Button>
            </Show>
          </HStack>
        </Show>
        <Show breakpoint="(max-width: 650px)">
          <HStack>
            <PlatformsDropdownSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              width="60%"
            />
            <SortSelector
              onSelectSort={(order) => setGameQuery({ ...gameQuery, order })}
              width="40%"
            />
          </HStack>
          <HStack marginBottom={4}>
            <GenreSelector
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              selectedGenre={gameQuery.genre}
              width="100%"
            />
            <Button
              onClick={() =>
                setGameQuery({
                  genre: null,
                  platform: null,
                  order: null,
                  searchText: "",
                })
              }
              width="100%"
            >
              Clear Filters
            </Button>
          </HStack>
        </Show>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
