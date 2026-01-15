import { memo } from "react";
import HeaderLayout from "../templates/HeaderLayout";

const UserManagement = memo(() => {
  return (
    <>
      <HeaderLayout>
        <p>ユーザー管理ページ</p>
      </HeaderLayout>
    </>
  );
});

export default UserManagement