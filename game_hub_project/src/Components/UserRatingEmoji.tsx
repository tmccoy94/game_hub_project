import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { HStack, Image, ImageProps, Text } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const UserRatingEmoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsUp, alt: "thumbsUp" },
    5: { src: bullsEye, alt: "bullsEye" },
  };

  return (
    <>
      <HStack paddingY={3}>
        <Text fontSize={15}> User Rating: </Text>
        <Image {...emojiMap[rating]} boxSize="25px" />
      </HStack>
    </>
  );
};

export default UserRatingEmoji;
