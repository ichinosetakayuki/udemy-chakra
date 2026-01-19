import axios from "axios";
import { type User } from "../types/api/user";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import PATHS from "@/router/paths";
import { toaster } from "../components/ui/toaster";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setLoginUser } = useLoginUser();

  const login = useCallback((id: string) => {
    setLoading(true);
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          const isAdmin = res.data.id === 10 ? true : false;
          setLoginUser({...res.data, isAdmin});
          navigate(PATHS.HOME);
          toaster.create({
            description: "ログインに成功しました",
            type: "success",
            closable: true,
          });
        } else {
          toaster.create({
            description: "ユーザーが見つかりません",
            type: "error",
            closable: true,
          });
        }
      })
      .catch(() => {
        toaster.create({
          description: "ログインができません",
          type: "error",
          closable: true,
        });
      })
      .finally(() => setLoading(false));
  }, [navigate, setLoginUser]);
  return { login, loading };
};
