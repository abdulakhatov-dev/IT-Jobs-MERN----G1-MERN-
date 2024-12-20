import React from "react";
import { Link, useLocation } from "react-router-dom";

const AuthFooter: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/auth/sign-in" ? (
        <p className='text-sm font-normal mb-6 mt-2'>
          Don't you have an Account?{" "}
          <Link to='/auth/sign-up' className='underline font-semibold'>
            Sign Up
          </Link>
        </p>
      ) : (
        <p className='text-sm font-normal mb-6 mt-2'>
          Already have an Account?{" "}
          <Link to='/auth/sign-in' className='underline font-semibold'>
            Sign in
          </Link>
        </p>
      )}
    </>
  );
};

export default AuthFooter;
