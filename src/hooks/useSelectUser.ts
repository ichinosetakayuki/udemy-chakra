import { useState, useCallback } from "react";
import type { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
}

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback(({ id, users }:Props) => {
    const targetUser = users.find((user) => user.id === id);
    setSelectedUser(targetUser ?? null);
  }, [])

  return { onSelectUser, selectedUser };
}