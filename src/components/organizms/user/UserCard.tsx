import { Box, Stack, Image, Text } from "@chakra-ui/react";
import { memo } from "react";

type Props = {
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: () => void;
};

export const UserCard = memo(({ imageUrl, userName, fullName, onClick }: Props) => {
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="md"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={onClick}
    >
      <Stack textAlign="center">
        <Image
          src={imageUrl}
          boxSize="160px"
          borderRadius="full"
          alt={userName}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
