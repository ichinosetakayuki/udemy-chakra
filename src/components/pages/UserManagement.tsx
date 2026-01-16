import { memo, useEffect, useState } from "react";
import HeaderLayout from "../templates/HeaderLayout";
import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { UserCard } from "../organizms/user/UserCard";
import { useAllUsers } from "@/hooks/useAllUsers";
import { UserDetailModal } from "../organizms/user/UserDetailModal";

const UserManagement = memo(() => {
  const { getUsers, loading, users } = useAllUsers();
  const [ open, setOpen ] = useState(false);
  const onClickUser = () => setOpen(true);

  useEffect(() => getUsers(), []);

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
                  imageUrl="https://picsum.photos/160"
                  userName={user.username}
                  fullName={user.name}
                  onClick={onClickUser}
                />
              </WrapItem>
            ))}
          </Wrap>
          <UserDetailModal open={open} onOpenChange={(e) => setOpen(e.open)} />
        </HeaderLayout>
      )}
    </>
  );
});

export default UserManagement;
