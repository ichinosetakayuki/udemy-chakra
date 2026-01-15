import { MenuIconButton } from "@/components/atoms/button/MenuIconButton";
import { MenuDrawer } from "@/components/molecules/MenuDrawer";
import {
  Flex,
  Heading,
  Link,
  Box,
} from "@chakra-ui/react";
import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import PATHS from "../../../router/paths";

const Header = memo(() => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const onClickHome = () => navigate(PATHS.HOME);
  const onClickUserManagement = () => navigate(PATHS.USER_MANAGEMENT);
  const onClickSetting = () => navigate(PATHS.SETTING);
  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link color="gray.50" onClick={onClickUserManagement}>
              ユーザー一覧
            </Link>
          </Box>
          <Box>
            <Link color="gray.50" onClick={onClickSetting}>
              設定
            </Link>
          </Box>
        </Flex>
        <MenuIconButton onClick={() => setOpen(true)} />
      </Flex>
      <MenuDrawer
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  );
});

export default Header;
