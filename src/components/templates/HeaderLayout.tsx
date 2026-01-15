import { memo, type ReactNode } from "react";
import Header from "../organizms/layout/Header";

type Props = {
  children?: ReactNode;
}

const HeaderLayout = memo(({ children }: Props) => {
  return (
    <>
      <Header />
      { children }
    </>
  );
});

export default HeaderLayout;