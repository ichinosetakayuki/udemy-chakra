import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import type { User } from "@/types/api/user";

type LoginUser = User & { isAdmin: boolean };

export type LoginUserContextType = {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

type Props = {
  children: ReactNode;
}

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);

export const LoginUserProvider = ({children}: Props) => {
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);
  return (
    <LoginUserContext.Provider value={{loginUser, setLoginUser}}>
      {children}
    </LoginUserContext.Provider>
  );
}