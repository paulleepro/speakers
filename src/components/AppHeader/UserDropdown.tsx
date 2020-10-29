import React, { FC } from "react";
import { Button } from "styles/components";
import { useAuth } from "context/AuthContext";
import { useMyIdentity } from "../../hooks/api/accounts";

const UserDropdown: FC = () => {
  const { logout } = useAuth();
  const { data: myIdentity }: any = useMyIdentity();

  return (
    <Button onClick={logout} backgroundColor="transparent" padding="11px 0">
      Log out ({myIdentity?.account?.given_name})
    </Button>
  );
};

export default UserDropdown;
