import { Stack, Dialog, Field, Input, CloseButton } from "@chakra-ui/react";
import { memo } from "react";
import type { User } from "../../../types/api/user";

type Props = {
  user: User | null;
  open: boolean;
  onOpenChange: (e : { open: boolean}) => void;
};

export const UserDetailModal = memo(({ user, open, onOpenChange }: Props) => {
  return (
    <Dialog.Root
      lazyMount
      open={open}
      onOpenChange={onOpenChange}
      motionPreset="slide-in-bottom"
    >
      <Dialog.Trigger />
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.CloseTrigger />
          <Dialog.Header>
            <Dialog.Title>ユーザー詳細</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body mx={4}>
            <Stack>
              <Field.Root>
                <Field.Label>名前</Field.Label>
                <Input value={user?.username ?? ""} readOnly />
              </Field.Root>
              <Field.Root>
                <Field.Label>フルネーム</Field.Label>
                <Input value={user?.name ?? ""} readOnly />
              </Field.Root>
              <Field.Root>
                <Field.Label>MAIL</Field.Label>
                <Input value={user?.email ?? ""} readOnly />
              </Field.Root>
              <Field.Root>
                <Field.Label>TEL</Field.Label>
                <Input value={user?.phone ?? ""} readOnly />
              </Field.Root>
            </Stack>
          </Dialog.Body>
          <Dialog.Footer />
          <Dialog.CloseTrigger asChild>
            <CloseButton size="sm" />
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
});
