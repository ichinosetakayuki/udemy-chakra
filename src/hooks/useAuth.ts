import axios from "axios"
import { type User } from "../types/api/user";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import PATHS from "@/router/paths";

export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            navigate(PATHS.HOME);
          } else {
            alert("ユーザーが見つかりません");
          }
        })
        .catch(() => alert("ログインができません"))
        .finally(() => setLoading(false));
    },
    []
  );
  return { login, loading };
}