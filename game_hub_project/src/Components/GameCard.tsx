import { useState } from "react";
import { type Game } from "../hooks/useGames";
import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import MetacriticScore from "./MetacriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card key={game.id}>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        borderRadius={10}
      />

      <CardBody minH="145px">
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={
              game.parent_platforms
                ? game.parent_platforms.map((p) => p.platform)
                : null
            }
          ></PlatformIconList>
          <MetacriticScore score={game.metacritic} />
          {/* <Text>{game.genres.map((list) => list)}</Text> */}
        </HStack>
        <Heading fontSize="2xl" paddingY={2}>
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
