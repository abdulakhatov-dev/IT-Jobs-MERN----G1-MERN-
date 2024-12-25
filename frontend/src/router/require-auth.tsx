
import React from "react";
import { Navigate } from "react-router-dom";
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'

interface PropsI {
    children: React.ReactNode;
    fallbackPath: string
}

const RequireAuth:React.FC<PropsI> = ({ children, fallbackPath='sign-in' }) => {
    const isAuthenticated = useIsAuthenticated()

    if(!isAuthenticated) {
        return <Navigate to={fallbackPath} />
    }

  return <>{children}</>;
};

export default RequireAuth;
