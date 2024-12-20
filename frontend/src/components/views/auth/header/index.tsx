import React from "react";
import { useLocation } from "react-router-dom";

import Theme from "@/components/contants/theme";

const AuthHeaer: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Theme className='absolute top-6 right-6' />
      <h1 className='text-2xl font-black'>
        {location.pathname === "/auth/sign-in" ? "Sign In" : "Sign Up"}
      </h1>
      <p className='text-sm font-normal mb-6 mt-2'>
        {location.pathname === "/auth/sign-in"
          ? "Sign In to your account on it-jobs"
          : "Create a new account on it-jobs"}
      </p>
    </>
  );
};

export default AuthHeaer;
