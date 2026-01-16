import { Stack, Dialog, Field, Input, CloseButton } from "@chakra-ui/react";
import { memo } from "react";

type Props = {
  open: buulean;
  onOpenChange: (e : { open: boolean}) => void;
};

export const UserDetailModal = memo(({ open, onOpenChange }: Props) => {
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
                <Input value="てすと" disabled />
              </Field.Root>
              <Field.Root>
                <Field.Label>フルネーム</Field.Label>
                <Input value="FULL NAME" disabled />
              </Field.Root>
              <Field.Root>
                <Field.Label>MAIL</Field.Label>
                <Input value="test@example.jp" disabled />
              </Field.Root>
              <Field.Root>
                <Field.Label>TEL</Field.Label>
                <Input value="000-1234-5678" disabled />
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
