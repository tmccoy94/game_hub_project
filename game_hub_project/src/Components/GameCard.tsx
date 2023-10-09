import { useState } from "react";
import { type Game } from "../hooks/useGames";
import {
  Card,
  Image,
  CardBody,
  Heading,
  AspectRatio,
  Text,
  list,
  HStack,
} from "@chakra-ui/react";
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

      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <MetacriticScore score={game.metacritic} />
          {/* <Text>{game.genres.map((list) => list)}</Text> */}
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
