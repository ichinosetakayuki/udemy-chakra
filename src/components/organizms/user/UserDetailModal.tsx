import {
  Stack,
  Dialog,
  Field,
  Input,
  CloseButton
} from "@chakra-ui/react";
import { memo, useEffect, useState, type ChangeEvent } from "react";
import type { User } from "../../../types/api/user";
import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  open: boolean;
  isAdmin?: boolean;
  onOpenChange: (e: { open: boolean }) => void;
};

export const UserDetailModal = memo(
  ({ user, open, isAdmin = false, onOpenChange }: Props) => {

    const [username, setUsername] =useState("");
    const [name, setName] =useState("");
    const [email, setEmail] =useState("");
    const [phone, setPhone] =useState("");

    useEffect(() => {
      setUsername(user?.username ?? "");
      setName(user?.name ?? "");
      setEmail(user?.email ?? "");
      setPhone(user?.phone ?? "");
    }, [user])

    const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);

    const onClickUpdate = () => alert();;
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
            <Dialog.Header>
              <Dialog.Title>ユーザー詳細</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body mx={4}>
              <Stack>
                <Field.Root>
                  <Field.Label>名前</Field.Label>
                  <Input
                    value={username}
                    onChange={onChangeUsername}
                    readOnly={!isAdmin}
                  />
                </Field.Root>
                <Field.Root>
                  <Field.Label>フルネーム</Field.Label>
                  <Input
                    value={name}
                    onChange={onChangeName}
                    readOnly={!isAdmin}
                  />
                </Field.Root>
                <Field.Root>
                  <Field.Label>MAIL</Field.Label>
                  <Input
                    value={email}
                    onChange={onChangeEmail}
                    readOnly={!isAdmin}
                  />
                </Field.Root>
                <Field.Root>
                  <Field.Label>TEL</Field.Label>
                  <Input
                    value={phone}
                    onChange={onChangePhone}
                    readOnly={!isAdmin}
                  />
                </Field.Root>
              </Stack>
            </Dialog.Body>
            <Dialog.Footer>
              {isAdmin && (
                <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
              )}
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    );
  },
);
