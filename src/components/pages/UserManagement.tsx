import { memo, useEffect, useState, useCallback } from "react";
import HeaderLayout from "../templates/HeaderLayout";
import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { UserCard } from "../organizms/user/UserCard";
import { useAllUsers } from "@/hooks/useAllUsers";
import { UserDetailModal } from "../organizms/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";

const UserManagement = memo(() => {
  const { getUsers, loading, users } = useAllUsers();

  const [open, setOpen] = useState(false);
  const { onSelectUser, selectedUser } = useSelectUser();
  console.log(selectedUser);

  useEffect(() => { getUsers(); }, [getUsers]);

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users });
      setOpen(true);
    },
    [users, onSelectUser]
  );

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <HeaderLayout>
          <Wrap p={{ base: 4, md: 10 }}>
            {users.map((user) => (
              <WrapItem key={user.id} mx="auto">
                <UserCard
                  id={user.id}
                  imageUrl="https://picsum.photos/160"
                  userName={user.username}
                  fullName={user.name}
                  onClick={onClickUser}
                />
              </WrapItem>
            ))}
          </Wrap>
          <UserDetailModal
            user={selectedUser}
            open={open}
            onOpenChange={(e) => setOpen(e.open)}
          />
        </HeaderLayout>
      )}
    </>
  );
});

export default UserManagement;
