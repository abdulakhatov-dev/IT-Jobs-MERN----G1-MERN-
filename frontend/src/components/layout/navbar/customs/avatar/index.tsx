import React from "react";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

import { IUser } from "@/interface/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarComponent: React.FC = () => {
  const user = useAuthUser() as IUser;

  return (
    <Avatar>
      <AvatarImage src={user?.profilePhoto} />
      <AvatarFallback className="text-sm">{user?.name[0] + "." + user?.surname[0]}</AvatarFallback>
    </Avatar>
  );
};

export default AvatarComponent;
