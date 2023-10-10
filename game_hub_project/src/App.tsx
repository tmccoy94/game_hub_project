import { useEffect, useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

  useEffect(() => {
    console.log(selectedGenre)
  })

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
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
}

export default App;
