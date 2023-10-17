import { Badge, Tooltip } from "@chakra-ui/react";

interface Props {
  score: number;
}

const MetacriticScore = ({ score }: Props) => {
  let color =
    score > 80 ? "green" : score > 60 ? "yellow" : score > 20 ? "red" : "";

  return (
    <Tooltip label="Metacritic Score">
      <Badge colorScheme={color} paddingX={2} paddingY={1} borderRadius={4}>
        {score}
      </Badge>
    </Tooltip>
  );
};

export default MetacriticScore;
