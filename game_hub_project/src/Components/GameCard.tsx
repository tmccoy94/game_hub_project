import { useState } from "react";
import { type Game } from "../hooks/useGames";
import {
  Card,
  Image,
  CardBody,
  Heading,
  HStack,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import MetacriticScore from "./MetacriticScore";
import getCroppedImageUrl from "../services/image-url";
import UserRatingEmoji from "./UserRatingEmoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const nameTransform = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[\s]+/g, "-")
      .replace(/[^a-z0-9-]+/g, "");
  };

  return (
    <Card key={game.id} shadow="md" border="1px" borderRadius={10}>
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
        <Link
          href={`https://www.ign.com/games/${nameTransform(game.name)}`}
          isExternal
        >
          <Tooltip label="Click to see IGN review">
            <Heading fontSize="2xl" paddingY={2} cursor="pointer">
              {game.name}
            </Heading>
          </Tooltip>
        </Link>
        <Heading fontSize="2xl" paddingY={0}>
          <UserRatingEmoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
