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
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card key={game.id} borderRadius={10}>
      <Image src={game.background_image} borderRadius={10} />

      <CardBody height={["5%"]}>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatformIconList>
      </CardBody>
    </Card>
  );
};

export default GameCard;
