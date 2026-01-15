import { Drawer, Button } from "@chakra-ui/react";

type MenuDrawerProps = {
  open: boolean;
  onOpenChange: (e: { open: boolean }) => void;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer = ({ open, onOpenChange, onClickHome, onClickUserManagement, onClickSetting }: MenuDrawerProps) => {
  return (
    <Drawer.Root
      placement="start"
      size="xs"
      open={open}
      onOpenChange={onOpenChange}
    >
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Body p={0} bg="gray.100">
            <Button w="100%" onClick={onClickHome}>Top</Button>
            <Button w="100%" onClick={onClickUserManagement}>ユーザー一覧</Button>
            <Button w="100%" onClick={onClickSetting}>設定</Button>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
};
