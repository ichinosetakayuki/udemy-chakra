import type { User } from "@/types/api/user";
import axios from "axios";
import { useCallback, useState } from "react";
import { toaster } from "../components/ui/toaster";

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch(() => {
        toaster.create({
          description: "ユーザーの取得に失敗しました",
          type: "error",
          closable: true,
        });
      })
      .finally(() => setLoading(false));
  }, []);
  return { getUsers, loading, users };
};
