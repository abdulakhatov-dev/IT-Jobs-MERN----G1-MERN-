import React from "react";
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { IUser } from "@/interface/user";

const HomePageComponent:React.FC = () => {
    const user = useAuthUser() as IUser

  return <div>
    {user?.name}
    {user?.surname}
<img src={user?.profilePhoto} alt="" />
  </div>;
};

export default HomePageComponent;
