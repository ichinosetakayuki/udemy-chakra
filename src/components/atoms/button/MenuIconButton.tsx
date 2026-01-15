import { IconButton } from "@chakra-ui/react";
import { Menu } from "lucide-react";

type MenuIconBUttonProps = {
  onClick: ()=> void;
};

export const MenuIconButton = ({ onClick }: MenuIconBUttonProps) => {
  return (
  <IconButton
    aria-label="Open menu"
    variant="ghost"
    display={{ base: "flex", md: "none" }}
    color="white"
    _hover={{ bg: "teal.400" }}
    p={0}
    onClick={onClick}
  >
    <Menu />
  </IconButton>
  );

};
